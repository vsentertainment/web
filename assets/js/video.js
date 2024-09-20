const video = document.getElementById('videopl');
const playPauseButton = document.getElementById('playPause');

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pausar';
    } else {
        video.pause();
        playPauseButton.textContent = 'Reproducir';
    }
});
