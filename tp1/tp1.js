//BASUALDO JULIA
//COMISIÓN 3
https://youtu.be/WAXEDgEcDSM

let arteoptico;
let cant = 11;

let colores = "coloresprincipales";
let relleno, fondo, base;
let violetaO, rosita, verde, azul, violeta1, cyan, magenta, verdeO, naranja, rojo, negro, amarillo;

function preload() {
img=loadImage("data/imagenarteoptico.jpg"); 
}
function setup() {
createCanvas (800, 400);
background(255);

  arteoptico = loadImage("data/imagenarteoptico.jpg");

  naranja = color(252, 170, 0);
  violetaO = color(141, 1, 87, 100);
  rosita = color(202, 1, 117);

  verde = color(1, 252, 19);
  violeta1 = color(122, 1, 126);
  azul = color(95, 1, 217);

  cyan = color(1, 252, 206);
  verdeO = color(7, 126, 1);
  magenta = color(217, 1, 210);

  amarillo = color(254, 255, 1);
  rojo = color(255, 0, 0);
  negro = color(0);

  relleno = naranja;
  fondo = dameColorRandom(); /////  para el color de fondo
  base = rosita;
}

function draw() {
  image(arteoptico, 0, 0, 400, 400);

  if (colores==="coloresprincipales") {
    relleno = naranja;
    fondo = dameColorRandom(); //////////////Color de fondo usando la función
    base = rosita;
 
} else if (colores==="colores1"){
    relleno = verde;
    fondo = violeta1;
    base = azul;
  } else if (colores==="colores2") {
    relleno = cyan;
    fondo = negro;
    base = magenta;
  } else if (colores==="colores3"){
    relleno = naranja;
    fondo = verdeO;
    base = rojo;
  }

  dibujarfondo(); // 

  push();
  translate(600, 200);
  rotate(radians(45));

  for (let i = 0; i < 4; i++) {
    push();
    rotate(radians(90 * i));
    cuadrante();
    pop();
  }
  pop();
}

// /////////Función que retorne/////////////
function dameColorRandom() {
  return color(random(255), random(255), random(255));
}

function dibujarfondo() {
  push();
  rectMode(CENTER);
  noStroke();  
  fill(fondo); //random
  rect(600, 200, 344, 344);
  pop();
}

function cuadrante() {
  for (let x = 0; x < cant; x++) {
    for (let y = 0; y < cant; y++) {
      let ancho = map(x, 0, cant - 1, 24, 6);
      let alto = map(y, 0, cant - 1, 24, 6);
      let posX = map(x, 0, cant - 1, 0, 265) - (x * (x + 1)) / 2;
      let posY = map(y, 0, cant - 1, 0, 265) - (y * (y + 1)) / 2;

      if ((x + y) < 11) {
        let d = dist(mouseX - 400, mouseY, posX, posY);
        let tono = d * 255 / dist(400, 0, 600, 200);

        rectMode(CENTER);
        stroke(166, 132, 253);
        strokeWeight(3);

        fill(base);
        rect(posX, posY, ancho, alto);

        fill(relleno, tono);
        rect(posX, posY, ancho, alto);
      }
    }
  }
}
function mouseClicked() {
  if (mouseX > 400 && mouseY > 0 && mouseX < 800 && mouseY < 400) {
    if (colores === "coloresprincipales") {
      colores = "colores1";
    } else if (colores === "colores1") {
      colores = "colores2";
    } else if (colores === "colores2") {
      colores = "colores3";
    } else if (colores === "colores3") {
      colores = "coloresprincipales";
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    colores = "coloresprincipales";
  }
}
