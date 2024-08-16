const funcionAutoejecutable = (() => {
  const animalArr = [];

  async function obtenerDataJson(nombre) {
    try {
      const response = await fetch("animales.json");
      const data = await response.json();
      const animalData = data.animales.find(animal => animal.name === nombre);
      return animalData || null;
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
      return null;
    }
  }

  function agregarAnimal(animal) {
    animalArr.push(animal);
  }

  function cardAnimal(animales) {
    const animalesAgregados = document.getElementById('animalesAgregados');
    let cards = '';

    animales.forEach(element => {
      cards += `
        <div class="col-12 col-md-6 col-lg-4" style="height:300px">
          <div class="card h-100">
            <img src="${element.img}" class="card-img-top h-75" alt="${element.nombre}">
            <h5>${element.nombre}</h5>
            <audio controls class="w-100 h-25">
              <source src="${element.sonido}" type="audio/mp3">
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        </div>
      `;
    });

    animalesAgregados.innerHTML = cards;
  }

  return { obtenerDataJson, agregarAnimal, animalArr, cardAnimal };
})();

export { funcionAutoejecutable };
