// "Hello" Text Animation in Different Languages
const hellos = ["Hello", "नमस्ते", "హలో", "Bonjour", "Hola"];
let helloIndex = 0;
const helloElement = document.getElementById("helloText");

function changeHello() {
  helloElement.innerText = hellos[helloIndex];
  helloIndex = (helloIndex + 1) % hellos.length;
}

// Change "Hello" text every 3 seconds
setInterval(changeHello, 3000);
changeHello();
