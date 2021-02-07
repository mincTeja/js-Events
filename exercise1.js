window.addEventListener('load',() => {
    const btn = document.querySelector("#btn");
    btn.addEventListener('click',event => {
        // event.target.value = parseInt(event.target.value)+1;
        btn.value++;
    });
});