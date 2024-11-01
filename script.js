// Fade out greetings
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("greetings").style.display = "none";
        document.getElementById("portfolio").style.display = "block";
        fadeName("Revanth Kaushik");
    }, 3000);
});

// Function to fade in name one letter at a time
function fadeName(name) {
    const nameElement = document.getElementById("name");
    let letters = name.split("");
    letters.forEach((letter, index) => {
        setTimeout(() => {
            nameElement.innerHTML += letter;
            nameElement.style.opacity = 1;
        }, index * 200); // Adjust speed as needed
    });
}
