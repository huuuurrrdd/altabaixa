let modo = 3;

function preload(){
  letra = loadImage("imgs/fig1.png");

}


function setup() {
  createCanvas(windowWidth, windowHeight);
 

  rectMode(CENTER);

  noStroke();
}

function draw() {
  background(220);
  imageMode(CENTER);
  image(letra, width/2, height/2, 716, 877);

  if(modo =='1'){
    fill(255, 0, 0, 235);
  }else if(modo =='2'){
    fill(0, 0, 255, 235);
  }else if(modo == '3'){
    fill(0, 255, 255, 235);
  }


 
 //mouseIsPressed
 //if(mouseIsPressed){


  print("Modo = " + modo);

  blendMode(MULTIPLY);

  ellipse(mouseX, mouseY, 600, 600);
  blendMode(BLEND);

 //}


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    modo = 1;
  } 
  if(keyCode === DOWN_ARROW){
    modo = 2;
  }
  if(keyCode === '3'){
    modo = 3;
  }


}

