const slides = [
    "https://www.canva.com/design/DAGfMnSMiUo/tvnx9s7ilnMNrd587eE-ew/view?embed",
    "https://www.canva.com/design/DAGfAnotherLink/view?embed", 
    "https://www.canva.com/design/DAGfMoreSlides/view?embed"
];

let currentIndex = 0;
const frame = document.getElementById("slide-frame");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        frame.src = slides[currentIndex];
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        frame.src = slides[currentIndex];
    }
});
