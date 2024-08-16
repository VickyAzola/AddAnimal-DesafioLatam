import { Leon, Lobo, Oso, Serpiente, Aguila } from './classes.mjs'
import { funcionAutoejecutable } from './autoejecutable.mjs';

// Cambiar preview dependiendo del nombre seleccionado
const preview =  document.getElementById("preview")
document.getElementById('animal').addEventListener("change", async (event) => {
  const nombreAnimal = event.target.value; 
  const animalData = await funcionAutoejecutable.obtenerDataJson(nombreAnimal);
  
  if (animalData) {
    preview.innerHTML = `
      <img src="${animalData.imagen}" alt="${animalData.name}" 
      class="mw-100 h-100 object-fit-cover d-block mx-auto"  />
    `;
  } else {
    preview.innerHTML = '<p>No se encontró información para este animal.</p>';
  }
})

// Recibir data del formulario y crear instancias de animales
document.getElementById('form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const nombre = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;
  const { imagen, sonido } = await funcionAutoejecutable.obtenerDataJson(nombre);

  if (!nombre || !edad || !comentarios) {
    alert('Debes completar todos los campos');
    return;
  }
  
  // Instancias de Animal
  let animal;
  switch (nombre) {
    case 'Leon':
      animal = new Leon(nombre, edad, imagen, comentarios, sonido);
      break;
    case 'Lobo':
      animal = new Lobo(nombre, edad, imagen, comentarios, sonido);
      break;
    case 'Oso':
      animal = new Oso(nombre, edad, imagen, comentarios, sonido);
      break;
    case 'Serpiente':
      animal = new Serpiente(nombre, edad, imagen, comentarios, sonido);
      break;
    case 'Aguila':
      animal = new Aguila(nombre, edad, imagen, comentarios, sonido);
      break;
  }

  funcionAutoejecutable.agregarAnimal(animal);
  funcionAutoejecutable.cardAnimal(funcionAutoejecutable.animalArr);

  // Resetear formulario
  preview.innerHTML = '';
  event.target.reset();
});
