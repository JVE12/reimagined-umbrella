
canvas = document.getElementById("canvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mouseDown);

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 1;

function my_mouseDown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.stroke();

        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y); //43is!!!!
        //43

        console.log("current position of x and and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + ", y = " + current_position_of_mouse_y);
        ctx.lineto(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}