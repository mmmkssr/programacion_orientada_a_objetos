class Particula {
  //método automático que se ejecuta cuando se crea una instancia en la clase
  // este método se ejecuta automáticamente
  constructor(_x, _y) {
    this.posX = _x; //establece el alcance de la variable
    this.posY = _y;
    this.estaViva = true;
    //tVida es el tiempo de vida
    this.tVida = round(random(10, 50));
    //this.tamano = 1;
    //this.opacidad = 100;

    //generar una variable única para cada objeto
  }

  update() {
    this.tVida -= 1; //Disminuir un punto
    if (this.tVida <= 0) {
      this.estaViva = false;
      return;
    }

    //if(this.posY < this.tamano / 2) {
    //  this.estaViva = false;
    //  return;
    //}

    this.posY -= 2;
    this.posX += -10;
    //this.opacidad -= 0.5;
    //this.tamamo = 0.5;
  }

  display() {
    // Cambia el color a la caída de las partículas
    let colorR = map(this.tVida, 0, 30, 255, 0); // Rojo disminuye con el tiempo
    let colorG = map(this.tVida, 0, 30, 0, 255); // Verde aumenta con el tiempo
    let colorB = random(0, 255); // Color aleatorio para el componente azul
    fill(colorR, colorG, colorB);

    noStroke();
    noCursor();
    circle(this.posX, this.posY, this.tVida);

    //fill(0,opacidad)
  }
}
