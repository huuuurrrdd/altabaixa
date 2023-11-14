
//https://p5js.org/reference/#/p5/blendMode 
//Constant: blend mode to set for canvas. either BLEND, DARKEST, 
//LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY,
// HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT


// To try: https://www.youtube.com/watch?v=NDn7y4nWekE&ab_channel=xinxin 


/*
let mSk = function(p) {
  p.setup = function() {
    p.createCanvas(600, 600);
    p.textSize(50);
    p.textAlign(p.CENTER);
    p.textStyle(p.ITALIC);
    p.noStroke();
  };

  p.draw = function() {
    p.background(255);

    p.fill(0, 255, 255);
    p.text('secret message', p.width / 2, p.height / 2);

    p.fill(255, 0, 0);
    p.text('nothing special', p.width / 2, p.height / 2);

    if (p.mouseIsPressed) {
      p.blendMode(p.MULTIPLY);
      p.fill(255, 0, 0);
      p.ellipse(p.mouseX, p.mouseY, 100, 100);
    } else {
      p.blendMode(p.BLEND);
    }
  };
};

let myP5 = new p5(mSk);

*/

/*
let mSk1 = function(p1) {

  p1.preload = () =>{
  }

  let x = 100;
  let y = 100;

  p1.setup = () => {
    p1.createCanvas(500, 500);
  };

  p1.draw = () => {
    p1.background(0);
    p1.fill(255);
    p1.rect(p1.mouseX,200,50,50);
  };
};

let myP1 = new p5(mSk1);
*/

let mSk2 = function(p2) {

  let x = 100;
  let y = 100;

  p2.setup = () => {
    p2.createCanvas(500, 500);

  };

  p2.draw = () => {
    p2.background(255);
    p2.fill(255);
   

    p2.blendMode(MULTIPLY);   //not working in the loop!!
    p2.strokeWeight(30);
    p2.stroke(80, 150, 255);
    p2.line(25, 25, 75, 75);
    p2.stroke(255, 50, 50);
    p2.line(75, 25, 25, 75);

    //p2.blendMode(BLEND);
    p2.noStroke();
    p2.rect(sk.mouseX,200,50,50);

    p2.noloop();

  };
};

let myP2 = new p5(mSk2);










