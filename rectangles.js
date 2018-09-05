var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  y = window.innerHeight - rectHeight;
});

//context
var c = canvas.getContext('2d');
//variables
var mouseX = "";
var mouseY = "";
var rectHeight = 200;
var rectWidth = 100;
var minHeight = rectHeight;
//we want the rectangles to sit at the bottom of the y-axis
var y = window.innerHeight - rectHeight;
var x = 0;

//Gather the mouse coordinates
window.addEventListener("mousemove", function(event){
  mouseX = event.x;
  mouseY = event.y;
});

//draw and display rectangle at the bottom of the window
function draw(){
  c.fillStyle = 'blue';
  c.fillRect( x, y, rectWidth, rectHeight);
}

function update(){
  /* compare mouse coordinates to rectangle coordinates. If mouse is within
  the rectangle, then the rectangle should grow longer*/
  if (mouseY > y && mouseY < window.innerHeight && mouseX > 0 && mouseX < rectWidth && mouseX > x ){
    if(rectHeight < 400 && rectHeight > 0){
      rectHeight += 8;
      y -= 8;
    }
  }else if(rectHeight > minHeight){
    rectHeight -= 8;
    y += 8;
  }
  //clear the rectangle before each new drawing//
  c.clearRect(0, 0, innerWidth, innerHeight);
  //draw rectangle function called//
  draw();
  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
