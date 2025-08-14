document.addEventListener("DOMContentLoaded", function () {
    const triggerElement = document.querySelector(".heart-trigger");

    triggerElement.addEventListener("mouseenter", (event) => {
        for (let i = 0; i < 12; i++) { // Generates 12 hearts
            createHeart(event.clientX, event.clientY);
        }
    });
});

function createHeart(x, y) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random positions for explosion
    const xOffset = (Math.random() - 0.5) * 100 + "px";
    const yOffset = (Math.random() - 0.5) * 100 + "px";

    heart.style.setProperty("--x", xOffset);
    heart.style.setProperty("--y", yOffset);
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 800);
}
