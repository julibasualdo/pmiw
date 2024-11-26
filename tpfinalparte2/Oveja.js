class Oveja {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.r = [-50, -150];

    this.imagen = loadImage('data/n1.png');
  }

  actualiza() {
    if (this.posX >= 500 ) {
      this.posX = random(this.r);
    }
    this.posX += 5;
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY, 50, 68);
  }

  colision(jugador) {
    if (jugador.posX + 50 > this.posX && jugador.posX < this.posX + 50 && jugador.posY + 68 > this.posY && jugador.posY < this.posY + 68) {
      jugador.posX = width / 2 - 25;
      jugador.posY = 430;
      jugador.restarVida();
    }
  }
}
