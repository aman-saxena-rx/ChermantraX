document.addEventListener('DOMContentLoaded', () => {

    // Screens & Inputs
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');
    const fileInput = document.getElementById('fileInput');
    const folderInput = document.getElementById('folderInput');

    // Modals
    const listScreen = document.getElementById('list-screen');
    const playerScreen = document.getElementById('player-screen');

    // Content Elements
    const playlistItems = document.getElementById('playlist-items');
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

    // Open the List Screen directly (No popup)
    window.openMyFilesApp = function() {
        listScreen.classList.add('visible');
    }

    window.closeListScreen = function() {
        listScreen.classList.remove('visible');
    }

    // Trigger Hidden Inputs from the List Screen buttons
    window.triggerFile = function() {
        if(fileInput) { fileInput.value = ''; fileInput.click(); }
    }

    window.triggerFolder = function() {
        if(folderInput) { folderInput.value = ''; folderInput.click(); }
    }

    // --- 3. FILE HANDLING ---

    // Handle File Select
    window.handleFileSelect = function(input) {
        const files = Array.from(input.files);
        addToPlaylist(files);
    }

    // Handle Folder Select
    window.handleFolderSelect = function(input) {
        const files = Array.from(input.files);
        addToPlaylist(files);
    }

    // Shared Function to Add Items to UI
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

        // Remove "Empty State" text if it exists
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
            
            btn.onclick = () => {
                openPlayer(file);
            };
            
            playlistItems.appendChild(btn);
        });
    }

    // --- 4. PLAYER LOGIC ---

    function openPlayer(file) {
        const fileURL = URL.createObjectURL(file);
        const type = file.type;

        // Hide List, Show Player
        listScreen.classList.remove('visible'); 
        playerScreen.classList.add('visible');

        // Reset Players
        videoPlayer.classList.add('media-hidden');
        audioPlayer.classList.add('media-hidden');
        imageViewer.classList.add('media-hidden');
        videoPlayer.pause();
        audioPlayer.pause();

        if (type.startsWith('video/')) {
            videoPlayer.src = fileURL;
            videoPlayer.classList.remove('media-hidden');
            videoPlayer.play();
        } 
        else if (type.startsWith('audio/')) {
            audioPlayer.src = fileURL;
            audioPlayer.classList.remove('media-hidden');
            audioPlayer.play();
        } 
        else if (type.startsWith('image/')) {
            imageViewer.src = fileURL;
            imageViewer.classList.remove('media-hidden');
        }
    }

    // Close Player -> Go back to List
    window.closePlayer = function() {
        playerScreen.classList.remove('visible');
        
        videoPlayer.pause();
        audioPlayer.pause();
        videoPlayer.src = "";
        audioPlayer.src = "";
        imageViewer.src = "";

        // Return to list
        listScreen.classList.add('visible');
    }

// --- 5. MOVIES APP LOGIC ---

    const moviesScreen = document.getElementById('movies-screen');

    window.openMovies = function() {
        moviesScreen.classList.add('visible');
    }

    window.closeMovies = function() {
        moviesScreen.classList.remove('visible');
    }

    // Play Stream (Direct Link)
    window.playStream = function(url) {
        if (!url) return;

        // Hide Movies Screen
        moviesScreen.classList.remove('visible');
        
        // Open Player Screen
        playerScreen.classList.add('visible');

        // Reset & Setup Video Player
        videoPlayer.classList.add('media-hidden');
        audioPlayer.classList.add('media-hidden');
        imageViewer.classList.add('media-hidden');
        
        videoPlayer.src = url;
        videoPlayer.classList.remove('media-hidden');
        videoPlayer.play();
    }
    
    // Update closePlayer to ensure it unhides the correct screen?
    // Current closePlayer logic goes back to 'listScreen'. 
    // We should modify it slightly to handle going back to the dashboard if listScreen wasn't open.
    // BUT for simplicity: The user will just hit "Close" and go to the list screen, 
    // or we can make a small tweak:

    const originalClosePlayer = window.closePlayer;
    let lastScreen = null; // Remember where we came from

    // Update Open Functions to remember screen
    window.openMyFilesApp = function() {
        listScreen.classList.add('visible');
        lastScreen = listScreen;
    }

    window.openMovies = function() {
        moviesScreen.classList.add('visible');
        lastScreen = moviesScreen;
    }

    window.playStream = function(url) {
        if (!url) return;
        if(lastScreen) lastScreen.classList.remove('visible'); // Hide previous
        
        playerScreen.classList.add('visible');
        
        videoPlayer.src = url;
        videoPlayer.classList.remove('media-hidden');
        audioPlayer.classList.add('media-hidden');
        imageViewer.classList.add('media-hidden');
        videoPlayer.play();
    }

    // Updated Close Player
    window.closePlayer = function() {
        playerScreen.classList.remove('visible');
        videoPlayer.pause();
        videoPlayer.src = "";
        
        // Go back to the screen we came from
        if (lastScreen) {
            lastScreen.classList.add('visible');
        } else {
            // Fallback to dashboard
            dashboardScreen.classList.add('visible'); 
        }
    }

});