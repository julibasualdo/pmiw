class Textos {

  constructor(x, ancho) {
    this.carga();
    this.posX = x;
    this.ancho = ancho;

    textAlign (CENTER, CENTER);
    textSize (15);
    textLeading(16);
  }

  carga() {
    this.texto = loadStrings('data/texto.txt');

    for (let i = 0; i < this.texto.length; i++) {
      text (this.texto[i]);
    }
  }

  dibujar(y, alto, linea) {
    this.posY = y;
    this.alto = alto;
    this.linea = linea;

    fill(255, 255, 255, 175);
    stroke(255,255,255,175)
    strokeWeight(5);
    rect(this.posX, this.posY, this.ancho, this.alto);

    fill (0);
    noStroke();
    text (this.texto[this.linea], this.posX+5, this.posY+5, this.ancho-10, this.alto-10);
  }
}
