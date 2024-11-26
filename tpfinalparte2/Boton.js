class Boton {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    //this.ancho = ancho;
    //this.alto = alto;
    this.imag = [];
    this.carga();
  }

  carga() {
    for (let i = 0; i < 5; i++) {
      this.imag.push(loadImage('data/b' + i + '.png'));
    }
  }

  dibujar(num) {
    this.num = num;
    image(this.imag[this.num], this.x, this.y, 140, 90);
  }

  apretarBoton() {
    return mouseX > this.x && mouseX < this.x + 140 && mouseY > this.y && mouseY < this.y + 90;
  }
}
