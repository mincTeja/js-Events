window.addEventListener('load',()=>{
    const inputText = document.querySelector(".text-input");
    const box = document.querySelector(".box");

    inputText.addEventListener('input',()=>{
        box.style.backgroundColor = inputText.value;
    });
});