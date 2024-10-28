document.addEventListener("DOMContentLoaded", () => {
    const greetings = [
        "Hello", "Namaste", "హలో", "Bonjour", "Hola", "你好", "안녕하세요", "مرحبا", "Здравствуйте", "こんにちは"
    ];
    let greetIndex = 0;
    const greetElement = document.querySelector(".greetings .fade-in");

    setInterval(() => {
        greetElement.textContent = greetings[greetIndex];
        greetIndex = (greetIndex + 1) % greetings.length;
    }, 2000);
});
