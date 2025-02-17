// Play background music on scroll
document.addEventListener("scroll", () => {
    const audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play();
    }

    // Fade-in effect for memories and text sections
    const elements = document.querySelectorAll(".memory, .text-section, .end-section");
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    });
});

// Redirect button functionality
document.getElementById("redirect-button").addEventListener("click", () => {
    window.location.href = "page4.html"; // Replace with your desired URL
});