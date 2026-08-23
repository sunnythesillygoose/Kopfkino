setTimeout(appear, 3000);

function big(x) {
  x.style.scale = "120%";
  x.style.transition = "scale 0.2s"
}
function small(x) {
 x.style.scale = "100%";
}

function spin(x) {
 x.style.rotate = "360deg";
 x.style.transition = "rotate 1s"
}

function hide(x) {
 x.classList.toggle("hide");
}

function gone(x) {
 x.classList.add("hide");
}

function here(x) {
 x.classList.remove("hide");
}



function appear(x) {
x.style.opacity = "1";
x.style.transition = "0.5s";
x.style.transition.delay = "2s"
}