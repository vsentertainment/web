const video = document.getElementById('videopl');
const playPauseButton = document.getElementById('playPause');

video.addEventListener('loadeddata', function () {
    playPauseButton.style = '';
});
playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pausar';
    } else {
        video.pause();
        playPauseButton.textContent = 'Reproducir';
    }
});
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pausar';
    } else {
        video.pause();
        playPauseButton.textContent = 'Reproducir';
    }
});
