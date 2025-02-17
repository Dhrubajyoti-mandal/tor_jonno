document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded"); // Check if script is running

    document.getElementById("submit-button").addEventListener("click", checkAnswer);
});

function checkAnswer() {
    console.log("Checking answer..."); // Debugging

    const answer = document.getElementById("answer-input").value.trim().toLowerCase();
    const videoBox = document.getElementById("video-box");
    const questionBox = document.getElementById("question-box");
    const audio = document.getElementById("audio");

    if (answer === "amar sona" || answer === "sona meye" || answer === "puku") {
        console.log("Correct answer!");

        questionBox.style.display = "none"; // Hide the question box
        videoBox.classList.add("show"); // Show the video box
        audio.play();

        // Ensure YouTube video starts playing
        const iframe = document.getElementById("video");
        // const videoSrc = "https://www.youtube.com/embed/nJ4DuKf6m80?autoplay=1"; 
        const videoSrc = "https://www.youtube.com/embed/nJ4DuKf6m80?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0";

        iframe.src = videoSrc; // Replace src to force autoplay

        startFireworks(); // Start fireworks animation
    } else {
        console.log("Wrong answer. Try again.");
        alert("Wrong answer! Try again.");
    }
}

function startFireworks() {
    console.log("Starting fireworks...");

    const container = document.getElementById("fireworks");

    if (!container) {
        console.error("Fireworks container not found!");
        return;
    }

    const fireworks = new Fireworks(container, {
        speed: 3,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 100,
        explosion: 10,
        autoresize: true,
        sound: {
            enable: true,
            files: [
                "https://fireworks.js.org/sounds/explosion0.mp3",
                "https://fireworks.js.org/sounds/explosion1.mp3",
                "https://fireworks.js.org/sounds/explosion2.mp3",
            ],
            volume: { min: 1, max: 2 },
        },
    });

    fireworks.start();
}
