class Personaje {

  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.imagen = loadImage('data/personaje.png');
    this.vida = 3;
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY, 50, 68);
  }

  vidas() {
    return this.vida;
  }

  restarVida() {
    this.vida -= 1;
  }

  mover(tecla, izquierda, derecha, arriba, abajo) {
    if (tecla === izquierda && this.posX > 25) {
      this.posX -= 50;
    } else if (tecla === derecha && this.posX < 425 ) {
      this.posX += 50;
    } else if (tecla === arriba && this.posY > 10 ) {
      this.posY -= 70;
    } else if (tecla === abajo && this.posY < 430 ) {
      this.posY += 70;
    }
  }
}
