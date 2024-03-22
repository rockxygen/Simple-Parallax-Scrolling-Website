let text = document.getElementById("text");

let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let i3 = document.getElementById("i3");
let i4 = document.getElementById("i4");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * -1.5 + 'px';

    i1.style.top = value * 0.75 + 'px';
    i2.style.top = value * 0.5 + 'px';
    i3.style.top = value * 0.25 + 'px';
});