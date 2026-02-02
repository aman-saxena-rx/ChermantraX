document.addEventListener('DOMContentLoaded', () => {

    // --- VARIABLES ---
    let lastScreen = null; // Remembers where we came from (My Files or Movies)

    // Screens & Inputs
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');
    const fileInput = document.getElementById('fileInput');
    const folderInput = document.getElementById('folderInput');

    // Modals
    const listScreen = document.getElementById('list-screen');
    const moviesScreen = document.getElementById('movies-screen');
    const playerScreen = document.getElementById('player-screen');

    // Content Elements
    const playlistItems = document.getElementById('playlist-items');
    const moviesGrid = document.querySelector('.movies-grid');
    const videoPlayer = document.getElementById('video-player');
    const audioPlayer = document.getElementById('audio-player');
    const imageViewer = document.getElementById('image-viewer');

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

    // --- 2. MY FILES APP LOGIC ---

    window.openMyFilesApp = function() {
        listScreen.classList.add('visible');
        lastScreen = listScreen; // Remember we are in My Files
    }

    window.closeListScreen = function() {
        listScreen.classList.remove('visible');
    }

    window.triggerFile = function() {
        if(fileInput) { fileInput.value = ''; fileInput.click(); }
    }

    window.triggerFolder = function() {
        if(folderInput) { folderInput.value = ''; folderInput.click(); }
    }

    // --- 3. FILE HANDLING ---

    window.handleFileSelect = function(input) {
        const files = Array.from(input.files);
        addToPlaylist(files);
    }

    window.handleFolderSelect = function(input) {
        const files = Array.from(input.files);
        addToPlaylist(files);
    }

    function addToPlaylist(files) {
        const mediaFiles = files.filter(file => 
            file.type.startsWith('video/') || 
            file.type.startsWith('audio/') || 
            file.type.startsWith('image/')
        );

        if (mediaFiles.length === 0) {
            alert("No supported media files found.");
            return;
        }

        const emptyState = document.querySelector('.empty-state');
        if(emptyState) emptyState.remove();

        mediaFiles.forEach(file => {
            const btn = document.createElement('button');
            btn.className = 'playlist-btn';
            
            // Fixed Icons
            let icon = '📄';
            if(file.type.startsWith('video')) icon = '🎬';
            if(file.type.startsWith('audio')) icon = '🎵';
            if(file.type.startsWith('image')) icon = '🖼️';
            
            btn.innerHTML = `<span style="margin-right:15px; font-size:20px;">${icon}</span> ${file.name}`;
            
            btn.onclick = () => {
                openPlayer(file);
            };
            
            playlistItems.appendChild(btn);
        });
    }

    // --- 4. MOVIES APP LOGIC ---

    window.openMovies = function() {
        moviesScreen.classList.add('visible');
        lastScreen = moviesScreen; // Remember we are in Movies
        
        // Build grid if empty
        if(moviesGrid && moviesGrid.children.length === 0) {
            renderMovies();
        }
    }

    window.closeMovies = function() {
        moviesScreen.classList.remove('visible');
    }

    function renderMovies() {
        if(typeof movieData === 'undefined') {
            console.error("movies.js not loaded!");
            return;
        }

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
                if(movie.link) {
                    playStream(movie.link);
                } else {
                    alert("No video link for: " + movie.name);
                }
            };

            card.appendChild(img);
            card.appendChild(playIcon);
            card.appendChild(title);
            moviesGrid.appendChild(card);
        });
    }

    // --- 5. PLAYER LOGIC ---

    // Play Local File
    function openPlayer(file) {
        const fileURL = URL.createObjectURL(file);
        playContent(fileURL, file.type);
    }

    // Play URL Stream
    window.playStream = function(url) {
        playContent(url, 'video/mp4');
    }

    // Unified Play Function
    function playContent(src, type) {
        // Hide current screen
        if(lastScreen) lastScreen.classList.remove('visible');
        
        playerScreen.classList.add('visible');

        // Reset
        videoPlayer.classList.add('media-hidden');
        audioPlayer.classList.add('media-hidden');
        imageViewer.classList.add('media-hidden');
        videoPlayer.pause();
        audioPlayer.pause();

        if (type.startsWith('video/') || type.includes('mp4')) {
            videoPlayer.src = src;
            videoPlayer.classList.remove('media-hidden');
            videoPlayer.play();
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

    // Close Player & Return
    window.closePlayer = function() {
        playerScreen.classList.remove('visible');
        
        videoPlayer.pause();
        audioPlayer.pause();
        videoPlayer.src = "";
        
        // Return to where we came from
        if (lastScreen) {
            lastScreen.classList.add('visible');
        } else {
            dashboardScreen.classList.add('visible'); 
        }
    }

});