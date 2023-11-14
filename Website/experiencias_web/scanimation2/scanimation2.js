
function preload(){
  fundo = loadImage("imgs/mas.png");
  filto = loadImage("imgs/fundG.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(225); 

  imageMode(CENTER);
  image(fundo, width/2, height/2, 626, 888
  
  );
  image(filto,  mouseX/4, height/2, 2* windowWidth, windowHeight);



}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
