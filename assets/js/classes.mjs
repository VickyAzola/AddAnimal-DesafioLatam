class Animal {
  #nombre
  #edad
  #img
  #comentario
  #sonido
  constructor(nombre, edad, img, comentario, sonido) {
    this.#nombre = nombre
    this.#edad = edad
    this.#img = img
    this.#comentario = comentario
    this.#sonido = sonido
  }

  get nombre() {
    return this.#nombre
  }

  get edad() {
    return this.#edad
  }

  get img() {
    return this.#img
  }

  set comentario(nuevoComentario) {
    this.#comentario = nuevoComentario
  }

  get sonido() {
    return this.#sonido
  }
}

class Leon extends Animal {
  Rugir() {
    const audio = new Audio(this.sonido());
    audio.play();
    return "Rigudo"
  }
}

class Lobo extends Animal {
  Aullar() {
    return "Aullido"
  }
}

class Oso extends Animal {
  Grunir() {
    return "Gruñido"
  }
}

class Serpiente extends Animal {
  Sisear() {
    return "Siseo"
  }
}

class Aguila extends Animal {
  Chillar() {
    return "Chillido"
  }
}

export {
  Leon,
  Lobo,
  Oso,
  Serpiente,
  Aguila
}