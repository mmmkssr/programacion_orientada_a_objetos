let fondoCambiable;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fondoCambiable = color(random(153, 255), random(115), random(191));

  for (let i = 0; i < 100; i++) {
    let nuevaPelota = new Pelota();
    pelotas.push(nuevaPelota);
  }

  // New = nomenclatura - js ejecuta la función constructor
}

function draw() {
  background(fondoCambiable);
  for (let i = 0; i < 100; i++) {
    pelotas[i].update();
    pelotas[i].display();
  }
  // update y display de la nueva pelota
}
class Pelota {
  // Plano de instrucciones para crear una pelota

  constructor() {
    // Se ejecuta automáticamente al crear una nueva pelota
    // Función interna que se ejecuta al momento de crear la clase
    // this = forma de decir a js que los objetos están dentro del objeto pelota

    // Todas las variables y declararlas a la vez
    this.radio = ceil(random(20, 30));
    this.diametro = this.radio * 2;
    this.posX = random(this.radio, width - this.radio);
    this.posY = random(this.radio, height - this.radio);
    this.velX = random(-10, 10);
    this.velY = random(-10, 10);
    console.log("estoy viva!");
  }

  // método update - función interna del objeto pelota

  update() {
    // sistema de colisión de la pelota

    this.posX += this.velX;
    this.posY += this.velY;

    if (this.posX > width - this.radio || this.posX < this.radio) {
      this.velX *= -1;
    }

    if (this.posY > height - this.radio || this.posY < this.radio) {
      this.velY *= -1;
    }
  }

  display() {
    // dibujar la pelota

    fill(63, 3, 89);
    noStroke();
    circle(this.posX, this.posY, this.diametro);
  }
}
