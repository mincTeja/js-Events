window.addEventListener('load',()=>{
    const charLen = document.querySelector(".charLen");
    const inputField = document.querySelector(".text-input");
    inputField.addEventListener('input',()=>{
        // console.log("input value : "+inputField.value+" "+inputField.value.length);
        const strLength = inputField.value.length;
        charLen.innerHTML = strLength;
    });
});