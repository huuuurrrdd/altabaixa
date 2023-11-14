
function preload(){
  coimb = loadImage('imgs/i_0.png');
  coimb1 = loadImage('imgs/i_1.png');
  coimb2 = loadImage('imgs/i_2.png');
}

let cor1 = color(255,0,0);
let cor2 = color();
let cor = cor1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  imageMode(CENTER);
  //tint(255, 0, 0);
  blendMode(MULTIPLY);
  image(coimb1, width/2, height/2, width , 0.985* height);
  image(coimb2, width/2, height/2, width , 0.985* height);
  blendMode(BLEND);

  blendMode(MULTIPLY);
/*
  if(mouseClicked){
    if(cor == cor1){
      cor = cor2;
    }else if(cor == cor2){
      cor = cor1;
    }
  }
  fill(cor);
  */

  fill(255, 0, 0);
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, 500, 500);
  blendMode(BLEND);

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
