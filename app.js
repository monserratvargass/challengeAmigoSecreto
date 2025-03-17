// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres
let amigos = [];

// Referencia al campo de entrada y lista
const inputNombre = document.getElementById('amigo');
const listaNombres = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const nombre = inputNombre.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Mostrar el nombre en la lista
    const li = document.createElement('li');
    li.textContent = nombre;
    listaNombres.appendChild(li);

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    listaNombres.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaNombres.appendChild(li);
    }
}


