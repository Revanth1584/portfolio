const words = ["aspiring AANG", "Learning AI, ML, and Cybersecurity"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  document.getElementById("dynamic-text").textContent = isDeleting
    ? currentWord.substring(0, j--)
    : currentWord.substring(0, j++);

  if (!isDeleting && j === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 100 : 200);
}

function downloadCV() {
  window.location.href = 'path-to-your-cv.pdf';
}

document.addEventListener("DOMContentLoaded", type);
