document.addEventListener('DOMContentLoaded', () => {

    // --- VARIABLES ---
    let lastScreen = null; 
    let controlsTimeout;   
    let isControlsVisible = true;

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
    const mediaContent = document.querySelector('.media-content');

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
            
            let icon = '📁';
            if(file.type.startsWith('video')) icon = '🎬';
            if(file.type.startsWith('audio')) icon = '🎵';
            if(file.type.startsWith('image')) icon = '🖼️';
            
            btn.innerHTML = `<span style="margin-right:15px; font-size:20px;">${icon}</span> ${file.name}`;
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

    // --- 4. PLAYER LOGIC (Netflix Mobile Style) ---

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

        playerTitle.innerText = title;

        videoPlayer.classList.add('media-hidden');
        audioPlayer.classList.add('media-hidden');
        imageViewer.classList.add('media-hidden');
        videoPlayer.pause();
        audioPlayer.pause();

        // Reveal Header initially
        showControls();

        if (type.startsWith('video/') || type.includes('mp4')) {
            videoPlayer.src = src;
            videoPlayer.classList.remove('media-hidden');
            videoPlayer.play();
            startControlsTimer();
        } 
        else if (type.startsWith('audio/')) {
            audioPlayer.src = src;
            audioPlayer.classList.remove('media-hidden');
            audioPlayer.play();
            // Audio players usually keep controls visible
            playerHeader.classList.remove('fade-out');
            clearTimeout(controlsTimeout);
        } 
        else if (type.startsWith('image/')) {
            imageViewer.src = src;
            imageViewer.classList.remove('media-hidden');
            // Images keep controls visible initially but can toggle
            startControlsTimer();
        }
    }

    // D. Close Player
    window.closePlayer = function() {
        playerScreen.classList.remove('visible');
        videoPlayer.pause();
        videoPlayer.src = ""; 
        audioPlayer.pause();
        
        if (lastScreen) lastScreen.classList.add('visible');
        else dashboardScreen.classList.add('visible'); 
    }

    // --- 5. SMART CONTROLS LOGIC (Mobile Optimized) ---
    
    function showControls() {
        playerHeader.classList.remove('fade-out');
        document.body.style.cursor = 'default';
        isControlsVisible = true;
        
        clearTimeout(controlsTimeout);
        
        // Auto-hide only if playing video
        if (!videoPlayer.paused && !videoPlayer.ended && !videoPlayer.classList.contains('media-hidden')) {
            controlsTimeout = setTimeout(() => {
                hideControls();
            }, 3000); 
        }
    }

    function hideControls() {
        playerHeader.classList.add('fade-out');
        document.body.style.cursor = 'none';
        isControlsVisible = false;
    }

    function startControlsTimer() {
        showControls();
    }

    function toggleControls(e) {
        // Don't toggle if clicking the header itself or controls
        if (e.target.closest('.player-header') || e.target.closest('audio')) return;

        if (isControlsVisible) {
            hideControls();
        } else {
            showControls();
        }
    }

    // Desktop: Mouse movement resets timer
    playerScreen.addEventListener('mousemove', () => {
        showControls();
    });

    // Mobile/Tablet: Tap anywhere on media content to TOGGLE
    // We bind to mediaContent wrapper to catch clicks outside the video element too
    mediaContent.addEventListener('click', (e) => {
        toggleControls(e);
    });

    // Prevent double firing on touch devices if both click/touch exist
    // Simple click handler above usually suffices for modern mobile browsers
});