var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//context
var c = canvas.getContext('2d');

//resize canvas when the window is resized
/*window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});*/

//variables
var mouseX = "";
var mouseY = "";

//Gather the mouse coordinates
window.addEventListener("mousemove", function(event){
  mouseX = event.x;
  mouseY = event.y;
});

function Rectangle(rectHeight, rectWidth, y, x) {
  this.rectHeight = rectHeight;
  this.minHeight = rectHeight;
  this.rectWidth = rectWidth;
  this.y = y;
  this.x = x;
  this.mouseX = mouseX;
  this.mouseY = mouseY;


  //draw and display rectangle at the bottom of the window
  this.draw = function(){
    c.fillStyle = 'blue';
    c.fillRect( this.x, this.y, this.rectWidth, this.rectHeight);
  }

  this.update = function(){

    /* compare mouse coordinates to rectangle coordinates. If mouse is within
    the rectangle, then the rectangle should grow longer*/
    if (mouseY > this.y && mouseY < window.innerHeight && mouseX > 0 && mouseX < this.rectWidth && mouseX > this.x ){
      if(this.rectHeight < 800 && this.rectHeight > 0){
        console.log("Rect Height < 800 and this.y:" + this.y);
        this.rectHeight += 8;
        this.y -= 8;
      }
    }else if(this.rectHeight > this.minHeight){
      this.rectHeight -= 8;
      this.y += 8;
    }
    //clear the rectangle before each new drawing//
    c.clearRect(0, 0, innerWidth, innerHeight);
    //draw rectangle function called//
    this.draw();
    /*window.requestAnimationFrame(update);*/

  }
}

var rectangleArray = [];


//variables
var rectHeight = 400;
var rectWidth = 100;
var minHeight = rectHeight;
//we want the rectangles to sit at the bottom of the y-axis
var y = canvas.height - rectHeight;
var x = 0;

var RectangleA = new Rectangle(rectHeight, rectWidth, y, x);

//Change canvas height and reset the y value for the rectangle object when resizing screen
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  y = canvas.height - rectHeight;
  RectangleA = new Rectangle(rectHeight, rectWidth, y, x);
})

function animate() {
  requestAnimationFrame(animate);
  RectangleA.update();
}

animate();

/*RectangleA.update();*/
