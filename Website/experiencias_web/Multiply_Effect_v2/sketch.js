//pesquisar: animação com blend mode;
//ou how blendMode works and alternatives
// color modes: https://blendmodes-p5js.netlify.app/ 


/*ideias: 

-> Espalhar letras com o rato de vez em quando;
-> Desenhar livremente para espalhar linhas pelo canvas;
-> Ao clicar em algo, aparecer uma lupa para passar por cima das imagens (testar isso com os outros filtros)


*/




//isto funciona:
function setup() {
  createCanvas(1200, 600);
  //noStroke();
}

function draw() {
  background(255);

  blendMode(MULTIPLY);   //not working in the loop!!
  strokeWeight(30);
  fill(255, 0, 0);
   stroke(80, 150, 255);

   //blendMode(BLEND)
   line(mouseX, mouseY, 25, 75);
   fill(0, 255, 255)
   stroke(255, 50, 50);
   line(25, 25, 75, 75);

   if(mouseIsPressed){

    blendMode(BLEND);
   }
   //noStroke();
   //rect(sk.mouseX,200,50,50);


}



