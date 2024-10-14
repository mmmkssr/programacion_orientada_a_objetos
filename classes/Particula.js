class Particula {
  //método automático que se ejecuta cuando se crea una instancia en la clase
  // este método se ejecuta automáticamente
  constructor(_x, _y) {
    this.posX = _x; //establece el alcance de la variable
    this.posY = _y;
    this.estaViva = true;
    //tVida es el tiempo de vida
    this.tVida = round(random(10, 20));

    //generar una variable única para cada objeto
  }

  update() {
    this.tVida -= 1; //Disminuir un punto
    if (this.tVida <= 0) {
      this.estaViva = false;
      return;
    }

    this.posY += 2;
    this.posX += random(10, 10);
  }

  display() {
    fill(0);
    noStroke();
    circle(this.posX, this.posY, 20);
  }
}
