document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('feelz.mp3');
    audio.loop = true;
    audio.volume = 0.10; // Set volume to 25%

    audio.play().catch(function() {
        // If autoplay fails, start playback on user interaction
        document.addEventListener('click', function() {
            audio.play();
        }, { once: true });
    });
});
