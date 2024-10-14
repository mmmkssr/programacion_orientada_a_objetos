//let particula1;
//let particula2;
let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //particula1 = new Particula("Juan");
  //particula2 = new Particula("Mercedes");

  //particula1.nombre = "Pedro";
}

function draw() {
  background(140, 39, 69);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }

  for (let i = 0; i < particulas.length; i++) {
    if (!particulas[i].estaViva) {  //! pregunta lo contrario
      particulas.splice(i, 1);
    }
    //else se ejecuta si es que no está viva la pelota
  }
  console.log(particulas.length);
}
