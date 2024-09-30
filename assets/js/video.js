const video = document.getElementById('videopl');
const playPauseButton = document.getElementById('playPause');
var pausetxt = "Pausar";
var playtxt = "Reproducir";

video.addEventListener('loadeddata', function () {
    playPauseButton.removeAttribute("style");
});
playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = pausetxt;
    } else {
        video.pause();
        playPauseButton.textContent = playtxt;
    }
});
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = pausetxt;
    } else {
        video.pause();
        playPauseButton.textContent = playtxt;
    }
});
