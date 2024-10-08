let posX, posY;
let velX, velY;
let diametro;
let radio;
let fondoCambiable;
//crear nueva pelota

function setup() {
  createCanvas(windowWidth, windowHeight);
  fondoCambiable = color(random(153, 255), random(115), random(191));
  //declarar la nueva pelota

  radio = ceil(random(20, 50));
  diametro = radio * 2;
  //console.log(diametro);

  posX = random(radio, width - radio);
  posY = random(radio, height - radio);

  velX = random(-10, 10);
  velY = random(-10, 10);
  //velX = 5;
  //velY = 5;
}

function draw() {
  background(fondoCambiable);
  // update y display de la nueva pelota
  fill(63, 3, 89);
  noStroke();

  posX += velX;
  posY += velY;

  // Rebota en el extremo derecho de la pantalla
  if (posX > width - radio || posX < radio) {
    velX *= -1;
    fondoCambiable = color(random(153, 255), random(115), random(191));
  }

  if (posY > height - radio || posY < radio) {
    velY *= -1;
    fondoCambiable = color(random(153, 255), random(115), random(191));
  }
  circle(posX, posY, diametro);
}

class Pelota {
  // Plano de instrucciones para crear una pelota
  constructor() {
    //todas las variables y declararlas a la vez
  }

  // método update

  update() {
    // sistema de colisión de la pelota
  }

  display() {
    // dibujar la pelota
  }
}
