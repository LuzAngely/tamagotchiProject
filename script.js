class Tamagotchi {
    constructor() {
      this.nombre = "Octocat";
      this.hambre = 0;
      this.felicidad = 0;
      this.energia = 100;
    }
  
    nacer() {
      setInterval(() => {
        this.estadoActual();
        this.mostrarEstado;
        this.hambre += 5;
        this.felicidad += 5;
        this.energia -= 5;
        this.revisionEstado();
      }, 4000);
    }
  
    detener() {
      clearInterval(vida);
      this.mostrarAlerta(`El Tamagotchi ${this.nombre} ha sido detenido.`);
    }
  
    comer() {
      this.hambre -= 10;
      this.felicidad += 5;
      this.energia += 5;
      this.mostrarAlerta(`Has alimentado a ${this.nombre}.`);
      this.revisionEstado();
    }
  
    jugar() {
      this.hambre += 5;
      this.felicidad += 5;
      this.energia -= 10;
      this.mostrarAlerta(`Has jugado con ${this.nombre}.`);
      this.revisionEstado();
    }
  
    dormir() {
      this.hambre += 5;
      this.felicidad -= 10;
      this.energia += 10;
      this.mostrarAlerta(`Has puesto a dormir a ${this.nombre}.`);
      this.revisionEstado();
    }
  
    estadoActual() {
      console.log(
        `Estado de ${this.nombre}: Hambre: ${this.hambre}, Felicidad: ${this.felicidad}, Energía: ${this.energia}`
      );
    }
  
    revisionEstado() {
      if (this.hambre >= 60) {
        this.mostrarAlerta(`${this.nombre} tiene mucha hambre. ¡Aliméntalo!`);
        this.mostrarEstado();
      }
  
      if (this.felicidad <= 10) {
        this.mostrarAlerta(
          `${this.nombre} está triste. ¡Juega con él para animarlo!`
        );
        this.mostrarEstado();
      }
      if (this.energia <= 20) {
        this.mostrarAlerta(`${this.nombre} está agotado. ¡Ponlo a dormir!`);
        this.mostrarEstado();
      }
    }
  
    mostrarEstado() {
      const estadoElement = document.getElementById("estado");
      estadoElement.innerHTML = `Hambre: ${this.hambre}, Felicidad: ${this.felicidad}, Energía: ${this.energia}`;
    }
  
    mostrarAlerta(mensajeAlerta) {
      const alerta = document.getElementById("alerta");
      alerta.innerHTML = mensajeAlerta;
    }
  
    revivir() {
      if (this.hambre >= 100 || this.felicidad <= 0 || this.energia <= 0) {
        this.mostrarAlerta(`${this.nombre} ha sido revivido.`);
        this.hambre = 0;
        this.felicidad = 0;
        this.energia = 100;
      }
    }
  }
  
  const Octocat = new Tamagotchi();
  
  vida = setTimeout(() => {
    Octocat.detener();
  }, 200000);
  
  Octocat.nacer();
  Octocat.mostrarEstado();
  Octocat.estadoActual();
  
  const $btnComer = document.getElementById("btn-comer"),
    $btnJugar = document.getElementById("btn-jugar"),
    $btnDormir = document.getElementById("btn-dormir");
  
  function cambioEstado(imagen) {
    const $imagen = document.getElementById("tamagotchi");
    $imagen.src = imagen;
  }
  
  document.addEventListener("click", (e) => {
    if (e.target === $btnComer) {
      cambioEstado("./assets/Eating.png");
      Octocat.comer();
      Octocat.mostrarEstado();
    }
    if (e.target === $btnJugar) {
      cambioEstado("./assets/Playing.gif");
      Octocat.jugar();
      Octocat.mostrarEstado();
    }
    if (e.target === $btnDormir) {
      cambioEstado("./assets/Sleeping.png");
      Octocat.dormir();
      Octocat.mostrarEstado();
    }
  });
  