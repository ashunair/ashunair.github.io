const cursorGradient = document.querySelector(".cursor-gradient");

document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event; // clientX and clientY track the cursor relative to the viewport

    // Offset by half the width & height to center the effect
    const offsetX = cursorGradient.offsetWidth / 2;
    const offsetY = cursorGradient.offsetHeight / 2;

    // Move the floating gradient with the cursor
    cursorGradient.style.transform = `translate(${clientX - offsetX}px, ${clientY - offsetY}px)`;
});
