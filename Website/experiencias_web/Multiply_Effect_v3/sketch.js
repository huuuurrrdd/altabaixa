

function setup() {
  createCanvas(600, 600);
  textSize(50);
  textAlign(CENTER);
  textStyle(ITALIC);
  noStroke();
}

function draw() {
  background(255);

  fill(0, 255, 255);
  text('secret message', width/2, height/2);

  fill(255, 0, 0);
  text('nothing special', width/2, height/2);

  if(mouseIsPressed){

    blendMode(MULTIPLY);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 100, 100);
  } else{

    blendMode(BLEND);

  }

}