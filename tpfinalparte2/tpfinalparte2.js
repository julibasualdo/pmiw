// BASUALDO JULIA - VALENTINA LEONOR CUATRINI 

// VIDEO: https://youtu.be/_4v4WmKzq8Q

let aventur;
let sonidoFondo;
function preload() {
  soundFormats('mp3', 'ogg');
   sonidoFondo = loadSound('/data/sonido.mp3');
  }
function setup() {
  createCanvas (640, 480);
  aventur = new Aventura();
  sonidoFondo.setVolume(0.5);
}

function draw() {
  aventur.dibujar();
}

function mousePressed() {
  aventur.click();
 
  if (!sonidoFondo.isPlaying()) {
    sonidoFondo.play();
  }
}


function keyPressed() {
  aventur.teclas();
}
