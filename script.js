// Fade out "Hello" and show the portfolio
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("hello-section").style.display = "none";
        document.getElementById("portfolio").style.display = "block";
    }, 2500);
});

// Function to scroll to the contact section
function scrollToContact() {
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
}

// Mock function to simulate CV download
function downloadCV() {
    alert("Downloading CV...");
}
