window.addEventListener('load', () => {
    const subtract = document.querySelector(".subtract");
    const addition = document.querySelector(".addition");
    const textBox = document.querySelector(".text-input");
    subtract.addEventListener("click", () => {
        // console.log("subtract");
        textBox.value--;
    });
    addition.addEventListener("click", () => {
        // console.log("addition");
        textBox.value++;
    });
});