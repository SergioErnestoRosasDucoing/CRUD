let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let nombreCancion = document.getElementById('nombreCancion');
let urlVideo = document.getElementById('urlVideo');
let urlImagen = document.getElementById('urlImagen');
let urlAudio = document.getElementById('urlAudio');
let btnGuardar = document.getElementById('btnGuardar');
let formularioEditar = document.getElementById('formularioEditar');
let idTarea = document.getElementById('idTarea');

//Rellenar arreglo tareas
let arreglos = [];
tareas = [
    {
        nombre: 'Bon Jovi',
        nombreCancion: 'Living on a prayer',
        video: 'Livin On A Prayer.mp4',
        imagen: 'https://i.pinimg.com/originals/3f/ab/3a/3fab3a061c0c56dd184e48562282b30b.jpg',
        audio: 'Livin On A Prayer.mp3'
    }
    
];

let listaTareas = document.getElementById('listaElementos');

function mostrarTareas() {
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class='row'>
            <div class='col-1 border p-3'>
                <strong>${tarea.nombre}</strong> 
            </div>
            <div class='col-2 border p-3'>
                <strong>${tarea.nombreCancion}</strong> 
            </div>
            <div class='col-2 border p-3'>
                <img class="Imagen" src="${tarea.imagen}" alt="Imagen"> 
            </div>
            <div class='col-3 border p-3'>
                <video class="Video" controls>
                    <source src="${tarea.video}" type="video/mp4">
                </video>
            </div>
            <div class='col-2 border p-3'>
                <audio controls>
                    <source src="${tarea.audio}" type="audio/ogg">
                </audio>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${indice})">Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-danger' onClick= "borrarTarea(${indice})">Borrar</button>
            </div>
            
        </div>
        `;
    })
}

let editarTarea = (indice) => {
    nombreEditar.value = tareas[indice].nombre;
    nombreCancionEditar.value = tareas[indice].nombreCancion;
    urlVideoEditar.value = tareas[indice].video;
    urlImagenEditar.value = tareas[indice].imagen;
    urlAudioEditar.value = tareas[indice].audio;
    idTarea.value = indice;
}

formularioEditar.addEventListener('submit', (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].nombreCancion = nombreCancionEditar.value;
    tareas[indice].video = urlVideoEditar.value;
    tareas[indice].imagen = urlImagenEditar.value;
    tareas[indice].audio = urlAudioEditar.value;
    mostrarTareas();
});

mostrarTareas();


let agregarDatos = function () {
    let datos = {
        nombre: nombre.value,
        nombreCancion: nombreCancion.value,
        video: urlVideo.value,
        imagen: urlImagen.value,
        audio: urlAudio.value
    }
    tareas.push(datos);
    console.log(tareas);
    mostrarTareas();
}

let cerrarModal = () => {
    btnGuardar.setAttribute('data-bs-dismiss', 'modal');
    btnGuardar.click();
}

let borrarTarea = (indice) => {
    tareas.splice(indice, 1);
    console.log(tareas);
    mostrarTareas();
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    formulario.reset();

});