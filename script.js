// Display greetings one by one
document.addEventListener("DOMContentLoaded", function () {
    const greetings = ["greeting-1", "greeting-2", "greeting-3"];
    greetings.forEach((id, index) => {
        setTimeout(() => {
            document.getElementById(id).style.opacity = 1;
        }, index * 2500);
    });

    // Fade out greetings and show name
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("portfolio").style.display = "block";
        animateName("Revanth Kaushik");
    }, 7500);
});

// Function to animate name floating letter-by-letter
function animateName(name) {
    const nameElement = document.getElementById("name");
    let letters = name.split("");
    letters.forEach((letter, index) => {
        setTimeout(() => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.animation = `float-letter ${0.5 + index * 0.1}s forwards`;
            nameElement.appendChild(span);
        }, index * 200);
    });
}
