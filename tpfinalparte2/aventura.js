class Aventura {

  constructor () {
    this.juego = new Juego();
    this.fondo = [];
    this.carga();

    this.botonInicio = new Boton (220, 400);
    this.botonCreditos = new Boton (220, 400);

    this.botonSiguiente = new Boton (220, 400);

    this.botonA = new Boton (70, 400);
    this.botonB = new Boton (320, 400);

    this.texto = new Textos (80, 450);

    this.estado = 0;
  }

  carga() {
    for ( let i = 0; i < 18; i++ ) {
      this.fondo.push( loadImage('data/p' +i+ '.png'));
    }
  }

  dibujar() {
    if (this.estado == 0) {
      image(this.fondo [0], 0, 0, 640, 480);
      this.texto.dibujar (310, 75, 0);
      this.botonInicio.dibujar(0);
      //
    } else if (this.estado == 1) {
      image(this.fondo [1], 0, 0, 640, 480);
      this.texto.dibujar (25, 100, 1);
      this.botonSiguiente.dibujar(1);
      //
    } else if (this.estado == 2) {
      image(this.fondo [2], 0, 0, 640, 480);
      this.texto.dibujar (25, 75, 2);

      this.texto.dibujar (110, 50, 3);
      this.texto.dibujar (170, 50, 4);

      this.botonA.dibujar(3);
      this.botonB.dibujar(4);
      //
    } else if (this.estado == 3) {
      image(this.fondo [3], 0, 0, 640, 480);
      this.texto.dibujar (300, 75, 6);
      this.botonSiguiente.dibujar(1);
      //
    } else if (this.estado == 4) {
      image(this.fondo [4], 0, 0, 640, 480);
      this.texto.dibujar (25, 50, 5);

      this.texto.dibujar (85, 50, 7);
      this.texto.dibujar (145, 50, 8);

      this.botonA.dibujar(3);
      this.botonB.dibujar(4);
      //
    } else if (this.estado == 5) {
      image(this.fondo [5], 0, 0, 640, 480);
      this.texto.dibujar (25, 75, 9);
      this.botonSiguiente.dibujar(1);
      //
    } else if (this.estado == 6) {
      image(this.fondo [6], 0, 0, 640, 480);
      this.texto.dibujar (250, 125, 10);
      this.botonSiguiente.dibujar(1);
      //
    } else if (this.estado == 7) {
      image(this.fondo [7], 0, 0, 640, 480);
      this.texto.dibujar (25, 110, 11);

      this.texto.dibujar (145, 30, 12);
      this.texto.dibujar (185, 30, 13);

      this.botonA.dibujar(3);
      this.botonB.dibujar(4);
      //
    } else if (this.estado == 8) {
      image(this.fondo [8], 0, 0, 640, 480);
      this.texto.dibujar (25, 50, 14);
      this.botonSiguiente.dibujar(1);
      //
    } else if (this.estado == 9) {
      image(this.fondo [9], 0, 0, 640, 480);
      this.texto.dibujar (25, 125, 15);

      this.texto.dibujar (160, 30, 16);
      this.texto.dibujar (200, 30, 17);

      this.botonA.dibujar(3);
      this.botonB.dibujar(4);
      //
    } else if (this.estado == 10) {
      image(this.fondo [10], 0, 0, 640, 480);
      this.texto.dibujar (25, 80, 18);
      this.botonSiguiente.dibujar(1);
      //
    } else if (this.estado == 11) {
      image(this.fondo [11], 0, 0, 640, 480);
      this.texto.dibujar (25, 100, 19);
      this.botonSiguiente.dibujar(1);
      //
    } else if (this.estado == 12) {
      image(this.fondo [12], 0, 0, 640, 480);
      this.texto.dibujar (25, 90, 20);

      this.texto.dibujar (125, 30, 21);
      this.texto.dibujar (165, 30, 22);

      this.botonA.dibujar(3);
      this.botonB.dibujar(4);
      //
    } else if (this.estado == 13) {
      image(this.fondo [13], 0, 0, 640, 480);
      this.texto.dibujar (25, 110, 23);
      this.botonSiguiente.dibujar(1);
      //
    } else if (this.estado == 14) {
      image(this.fondo [14], 0, 0, 640, 480);
      this.texto.dibujar (25, 75, 24);
      this.botonSiguiente.dibujar(1);
      //
    } else if (this.estado == 15) {
      image(this.fondo [15], 0, 0, 640, 480);
      this.texto.dibujar (25, 75, 25);
      this.botonCreditos.dibujar(2);
      //
    } else if (this.estado == 16) {
      image(this.fondo [16], 0, 0, 640, 480);
      this.texto.dibujar (25, 75, 26);
      this.botonCreditos.dibujar(2);
      //
    } else if (this.estado == 17) {
      image(this.fondo [17], 0, 0, 640, 480);
      this.texto.dibujar (25, 75, 27);
      this.botonCreditos.dibujar(2);
      //
    } else if (this.estado == 18) { //-----------------------------CREDITOS
      background (0);
      textSize(25);
      textAlign(CENTER, CENTER);
      fill(255);
      text("♥Creado por Julia y Valentina L♥", width / 2, height / 2);

      //this.juego.reinicio();

      this.botonInicio.dibujar(0);
      //
    } else if (this.estado == 19) { //--------------------------------JUEGO
      this.juego.dibujar();
      if (this.juego.estado === "tutorial") {
        this.botonSiguiente.dibujar(1);
      } else if (this.juego.estado === "jugando") {
        this.juego.actualiza();
      } else if (this.juego.estado === "ganaste") {
        this.botonInicio.dibujar(0);
      } else if (this.juego.estado === "perdiste") {
        this.botonInicio.dibujar(0);
      }
    }
    //
  }


  click() {
    if (this.estado == 0) {
      if (this.botonInicio.apretarBoton()) {
        this.estado = 1;
      }
    } else if (this.estado == 1) {
      if (this.botonSiguiente.apretarBoton()) {
        this.estado = 2;
      }
    } else if (this.estado == 2) {
      if (this.botonA.apretarBoton()) {
        this.estado = 6;
      } else if (this.botonB.apretarBoton()) {
        this.estado = 3;
      }
    } else if (this.estado == 3) {
      if (this.botonSiguiente.apretarBoton()) {
        this.estado = 4;
      }
    } else if (this.estado == 4) {
      if (this.botonA.apretarBoton()) {
        this.estado = 6;
      } else if (this.botonB.apretarBoton()) {
        this.estado = 5;
      }
    } else if (this.estado == 5) {
      if (this.botonSiguiente.apretarBoton()) {
        this.estado = 16;
      }
    } else if (this.estado == 6) {
      if (this.botonSiguiente.apretarBoton()) {
        this.estado = 7;
      }
    } else if (this.estado == 7) {
      if (this.botonA.apretarBoton()) {
        this.estado = 9;
      } else if (this.botonB.apretarBoton()) {
        this.estado = 8;
      }
    } else if (this.estado == 8) {
      if (this.botonSiguiente.apretarBoton()) {
        this.estado = 17;
      }
    } else if (this.estado == 9) {
      if (this.botonA.apretarBoton()) {
        this.estado = 10;
      } else if (this.botonB.apretarBoton()) {
        this.estado = 12;
      }
    } else if (this.estado == 10) {
      if (this.botonSiguiente.apretarBoton()) {
        this.estado = 11;
      }
    } else if (this.estado == 11) {
      if (this.botonSiguiente.apretarBoton()) {
        this.estado = 16;
      }
    } else if (this.estado == 12) {
      if (this.botonA.apretarBoton()) {
        this.estado = 14;
      } else if (this.botonB.apretarBoton()) {
        this.estado = 13;
      }
    } else if (this.estado == 13) {
      if (this.botonSiguiente.apretarBoton()) {
        this.estado = 17;
      }
    } else if (this.estado == 14) {
      if (this.botonSiguiente.apretarBoton()) {
        this.estado = 15;
      }
    } else if (this.estado == 15) {
      if (this.botonCreditos.apretarBoton()) {
        this.estado = 19;
      }
    } else if (this.estado == 16) {
      if (this.botonCreditos.apretarBoton()) {
        this.estado = 19;
      }
    } else if (this.estado == 17) {
      if (this.botonCreditos.apretarBoton()) {
        this.estado = 18;
      }
    } else if (this.estado == 18) {
      if (this.botonInicio.apretarBoton()) {
        this.estado = 19;
      }
    } else if (this.estado == 19) {
      if (this.juego.estado === "tutorial") {
        if (this.botonInicio.apretarBoton()) {
          this.juego.estado = "jugando";
        }
      } else if (this.juego.estado === "ganaste" || this.juego.estado === "perdiste") {
        if (this.botonInicio.apretarBoton()) {

          this.estado = 0;
          this.juego.reinicio();
        }
      }
    }
  }

  teclas() {
    this.juego.teclaPresionada();
  }
  ///
}
