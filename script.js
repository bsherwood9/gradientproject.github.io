var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");;
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var hor  = document.getElementById('horizon');
var vert = document.getElementById('vertical');
var boxy = document.getElementById('box');

function colorPick (event) {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";"
};

function gradChangeDir(event) {
    body.style.background = 
    "linear-gradient(to "
    + event.target.value
    + ", "
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";"
}
// Move the mouse and the gradient should follow...
    function groovy (event){
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        var xy = x + y;
        boxy.style.background = 
        "linear-gradient(" + xy + "deg, "
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
        css.textContent = "CSS code: " + boxy.style.background + ";"

}
boxy.addEventListener("mousemove", groovy);

// hor.addEventListener('click', gradChangeDir);
// vert.addEventListener('click', gradChangeDir);

// color1.addEventListener("input", colorPick);
// color2.addEventListener("input", colorPick);
