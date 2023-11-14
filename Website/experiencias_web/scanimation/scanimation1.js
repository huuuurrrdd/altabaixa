
function preload(){
  fundo = loadImage("imgs/img1.png");
  filto = loadImage("imgs/img2.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(225); 

  imageMode(CENTER);
  image(fundo, width/2, height/2, windowWidth, windowHeight);
  image(filto,  mouseX, height/2, windowWidth, windowHeight);



}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
