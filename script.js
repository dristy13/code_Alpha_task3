const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const trackTitle = document.getElementById('track-title');
const trackButtons = document.querySelectorAll('.track-button');

trackButtons.forEach(button => {
    button.addEventListener('click', () => {
        const src = button.getAttribute('data-src');
        audioSource.src = src;
        trackTitle.textContent = button.textContent;
        audio.load();
        audio.play();
    });
});
