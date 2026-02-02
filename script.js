document.addEventListener('DOMContentLoaded', () => {

    // --- VARIABLES ---
    let lastScreen = null; // History
    let controlsTimeout;   // Timer for auto-hiding controls

    // Screens
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');
    
    // Inputs
    const fileInput = document.getElementById('fileInput');
    const folderInput = document.getElementById('folderInput');

    // Modals
    const listScreen = document.getElementById('list-screen');
    const moviesScreen = document.getElementById('movies-screen');
    const playerScreen = document.getElementById('player-screen');

    // Player Elements
    const playlistItems = document.getElementById('playlist-items');
    const moviesGrid = document.querySelector('.movies-grid');
    const videoPlayer = document.getElementById('video-player');
    const audioPlayer = document.getElementById('audio-player');
    const imageViewer = document.getElementById('image-viewer');
    const playerHeader = document.getElementById('player-header');
    const playerTitle = document.getElementById('player-title');

    // --- 1. AUTH LOGIC ---
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        loginScreen.classList.add('hidden');
        dashboardScreen.classList.add('visible');
    } else {
        loginScreen.classList.remove('hidden');
        dashboardScreen.classList.remove('visible');
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            localStorage.setItem('isLoggedIn', 'true');
            loginScreen.classList.add('hidden');
            dashboardScreen.classList.add('visible');
        });
    }

    window.logout = function() {
        localStorage.removeItem('isLoggedIn');
        dashboardScreen.classList.remove('visible');
        loginScreen.classList.remove('hidden');
        if(loginForm) loginForm.reset();
    }

    window.openApp = function(url) {
        if (url) window.location.href = url;
    }

    // --- 2. MY FILES LOGIC ---
    window.openMyFilesApp = function() {
        listScreen.classList.add('visible');
        lastScreen = listScreen; 
    }

    window.closeListScreen = function() {
        listScreen.classList.remove('visible');
    }

    window.triggerFile = function() { if(fileInput) { fileInput.value = ''; fileInput.click(); } }
    window.triggerFolder = function() { if(folderInput) { folderInput.value = ''; folderInput.click(); } }

    window.handleFileSelect = function(input) { addToPlaylist(Array.from(input.files)); }
    window.handleFolderSelect = function(input) { addToPlaylist(Array.from(input.files)); }

    function addToPlaylist(files) {
        const mediaFiles = files.filter(f => f.type.startsWith('video/') || f.type.startsWith('audio/') || f.type.startsWith('image/'));
        if (mediaFiles.length === 0) { alert("No supported media files found."); return; }

        const emptyState = document.querySelector('.empty-state');
        if(emptyState) emptyState.remove();

        mediaFiles.forEach(file => {
            const btn = document.createElement('button');
            btn.className = 'playlist-btn';
            
            let icon = '📄';
            if(file.type.startsWith('video')) icon = '🎬';
            if(file.type.startsWith('audio')) icon = '🎵';
            if(file.type.startsWith('image')) icon = '🖼️';
            
            btn.innerHTML = `<span style="margin-right:15px; font-size:20px;">${icon}</span> ${file.name}`;
            // Pass file name as title
            btn.onclick = () => openPlayer(file, file.name);
            playlistItems.appendChild(btn);
        });
    }

    // --- 3. MOVIES APP LOGIC ---
    window.openMovies = function() {
        moviesScreen.classList.add('visible');
        lastScreen = moviesScreen;
        if(moviesGrid && moviesGrid.children.length === 0) renderMovies();
    }

    window.closeMovies = function() {
        moviesScreen.classList.remove('visible');
    }

    function renderMovies() {
        if(typeof movieData === 'undefined') return;
        moviesGrid.innerHTML = ''; 
        movieData.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            
            const img = document.createElement('img');
            img.src = movie.poster;
            img.alt = movie.name;
            img.onerror = function() { this.src = 'https://via.placeholder.com/300x450?text=No+Poster'; };

            const playIcon = document.createElement('div');
            playIcon.className = 'play-icon';
            playIcon.innerHTML = '▶';

            const title = document.createElement('span');
            title.className = 'movie-title';
            title.innerText = movie.name;

            // Pass Movie Name to Player
            card.onclick = () => {
                if(movie.link) playStream(movie.link, movie.name);
                else alert("No video link for: " + movie.name);
            };

            card.appendChild(img);
            card.appendChild(playIcon);
            card.appendChild(title);
            moviesGrid.appendChild(card);
        });
    }

    // --- 4. PLAYER LOGIC (Netflix Style) ---

    // A. Open Local File
    function openPlayer(file, title = "Unknown File") {
        const fileURL = URL.createObjectURL(file);
        playContent(fileURL, file.type, title);
    }

    // B. Open Stream URL
    window.playStream = function(url, title = "Streaming Video") {
        playContent(url, 'video/mp4', title);
    }

    // C. Unified Play Function
    function playContent(src, type, title) {
        if(lastScreen) lastScreen.classList.remove('visible');
        playerScreen.classList.add('visible');

        // Set Title
        playerTitle.innerText = title;

        // Reset Players
        videoPlayer.classList.add('media-hidden');
        audioPlayer.classList.add('media-hidden');
        imageViewer.classList.add('media-hidden');
        videoPlayer.pause();
        audioPlayer.pause();

        if (type.startsWith('video/') || type.includes('mp4')) {
            videoPlayer.src = src;
            videoPlayer.classList.remove('media-hidden');
            videoPlayer.play();
            // Start Auto-Hide Logic
            startControlsTimer();
        } 
        else if (type.startsWith('audio/')) {
            audioPlayer.src = src;
            audioPlayer.classList.remove('media-hidden');
            audioPlayer.play();
        } 
        else if (type.startsWith('image/')) {
            imageViewer.src = src;
            imageViewer.classList.remove('media-hidden');
        }
    }

    // D. Close Player
    window.closePlayer = function() {
        playerScreen.classList.remove('visible');
        videoPlayer.pause();
        videoPlayer.src = ""; // Stop buffering
        
        // Return to Previous Screen
        if (lastScreen) lastScreen.classList.add('visible');
        else dashboardScreen.classList.add('visible'); 
    }

    // --- 5. AUTO-HIDE CONTROLS LOGIC ---
    
    function showControls() {
        playerHeader.classList.remove('fade-out'); // Show Header
        document.body.style.cursor = 'default';    // Show Cursor
        
        // Reset Timer
        clearTimeout(controlsTimeout);
        controlsTimeout = setTimeout(() => {
            // Hide only if video is playing
            if (!videoPlayer.paused && !videoPlayer.ended) {
                playerHeader.classList.add('fade-out');
                document.body.style.cursor = 'none'; // Hide Cursor
            }
        }, 3000); // 3 Seconds
    }

    function startControlsTimer() {
        showControls(); // Initial trigger
    }

    // Event Listeners for Interaction (Mouse & Touch)
    playerScreen.addEventListener('mousemove', showControls);
    playerScreen.addEventListener('touchstart', showControls);
    playerScreen.addEventListener('click', showControls);

});