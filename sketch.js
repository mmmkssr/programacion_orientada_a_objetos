let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }

  /**
   * Esta es una forma de borrar las partículas muertas utilizando
   * un for loop que navega todas las partículas y se pregunta
   * por la variable boleana estaViva.
   * 
   * Utiliza la función splice para borrar la partícula específica
   * mediante su indice
   */

  
  for (let i = 0; i < particulas.length; i++) {
    if (!particulas[i].estaViva) {
      //! pregunta lo contrario
      particulas.splice(i, 1);
    }
    //else se ejecuta si es que no está viva la pelota

    //particulas = particulas.filter((pelota) => pelota.estaViva);
    //código escrito de forma más eficiente
  }
  console.log(particulas.length);
}
