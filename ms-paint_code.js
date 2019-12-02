//color variants
var black
var white
var grey1
var red1
var yellow1
var green1
var cyan1
var blue1
var magenta1
var purple1
var brown
var orange
var brush


function setup() {
  createCanvas(600, 347);
}

function draw() {
  background(255);

  //backdrop setup
  noStroke(); //beige
  fill(236, 233, 216);
  rect(0, 0, 60, 347);
  rect(0, 20, 600, 30);
  rect(0, 297, 600, 50);

  noStroke(); //headbar
  fill(0, 92, 255);
  rect(0, 0, 600, 30);

  stroke(255); //exit
  fill(255, 40, 10);
  rect(575, 5, 20, 20);

  stroke(255)
  noFill();
  rect(550, 5, 20, 20)

  //colors
  noStroke();
  fill(0);
  var black = square(5, 50, 20);

  noStroke();
  fill(255);
  var white = square(30, 50, 20)

  noStroke();
  fill(150);
  var grey1 = square(5, 75, 20)

  noStroke();
  fill(255, 20, 50)
  var red1 = square(30, 75, 20)

  noStroke();
  fill(255, 255, 50)
  var yellow1 = square(5, 100, 20)

  noStroke();
  fill(0, 200, 0);
  var green1 = square(30, 100, 20)

  noStroke();
  fill(0, 200, 220)
  var cyan1 = square(5, 125, 20)
  
  noStroke();
  fill(0, 0, 255)
  var blue1 = square (30, 125, 20)
  
  noStroke();
  fill(255, 20, 200)
  var magenta1= square (5, 150, 20)
  
  noStroke();
  fill(130, 0, 200)
  var purple1= square(30, 150, 20)
  
  noStroke();
  fill(125, 65, 10)
  var brown1 = square (5, 175, 20)
  
  noStroke();
  fill(255, 126, 64)
  var orange1 = square (30, 175, 20)

}
