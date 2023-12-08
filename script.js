
let face = document.getElementById("face");

let faceOnClick = (e) => {
    let mustache = document.getElementById("mustache");
    let top = e.clientY;
    let left = e.clientX;
    mustache.style.top = `${top -54}px`;
    mustache.style.left = `${left - 100}px`;
};

face.addEventListener("click", faceOnClick);