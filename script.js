// Array of "Hello" in different languages
const hellos = ["Hello", "नमस्ते", "హలో", "Bonjour", "Hola"];
let helloIndex = 0;
const helloElement = document.getElementById("helloText");

function showHello() {
  helloElement.innerText = hellos[helloIndex];
  helloElement.style.opacity = 1;

  // Cycle through the hellos array
  helloIndex = (helloIndex + 1) % hellos.length;

  // Hide and update the hello text
  setTimeout(() => {
    helloElement.style.opacity = 0;
  }, 3000);
}

// Show each "Hello" on load
setInterval(showHello, 3500);
showHello();
