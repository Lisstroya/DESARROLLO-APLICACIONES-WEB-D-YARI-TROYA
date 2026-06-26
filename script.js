const formulario = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorAsunto = document.getElementById("errorAsunto");
const errorMensaje = document.getElementById("errorMensaje");

const listaSolicitudes = document.getElementById("listaSolicitudes");
const totalRegistros = document.getElementById("totalRegistros");

let contador = 0;

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorAsunto.textContent = "";
    errorMensaje.textContent = "";

    nombre.classList.remove("is-invalid");
    correo.classList.remove("is-invalid");
    asunto.classList.remove("is-invalid");
    mensaje.classList.remove("is-invalid");

    let valido = true;

    if (nombre.value.trim() === "") {
        errorNombre.textContent = "Ingrese su nombre";
        nombre.classList.add("is-invalid");
        valido = false;
    }

    if (correo.value.trim() === "") {
        errorCorreo.textContent = "Ingrese su correo electrónico";
        correo.classList.add("is-invalid");
        valido = false;
    }

    if (asunto.value.trim() === "") {
        errorAsunto.textContent = "Ingrese un asunto";
        asunto.classList.add("is-invalid");
        valido = false;
    }

    if (mensaje.value.trim() === "") {
        errorMensaje.textContent = "Ingrese un mensaje";
        mensaje.classList.add("is-invalid");
        valido = false;
    }

    if (!valido) {
        return;
    }

    const tarjeta = document.createElement("div");

    tarjeta.className = "card shadow-sm p-3 mb-3";

    const textoNombre = document.createElement("p");
    textoNombre.innerHTML = "<strong>Nombre:</strong> " + nombre.value;  

    const textoCorreo = document.createElement("p");
    textoCorreo.innerHTML = "<strong>Correo:</strong> " + correo.value;

    const textoAsunto = document.createElement("p");
    textoAsunto.innerHTML = "<strong>Asunto:</strong> " + asunto.value;

    const textoMensaje = document.createElement("p");
    textoMensaje.innerHTML = "<strong>Mensaje:</strong> " + mensaje.value;

    const botonEliminar = document.createElement("button");

    botonEliminar.textContent = "Eliminar";

    botonEliminar.className = "btn btn-danger btn-sm mt-3 d-block mx-auto";

    botonEliminar.addEventListener("click", function () {

        listaSolicitudes.removeChild(tarjeta);

        contador--;

        totalRegistros.textContent = contador;

    });

    tarjeta.appendChild(textoNombre);
    tarjeta.appendChild(textoCorreo);
    tarjeta.appendChild(textoAsunto);
    tarjeta.appendChild(textoMensaje);
    tarjeta.appendChild(botonEliminar);

    listaSolicitudes.appendChild(tarjeta);

    contador++;

    totalRegistros.textContent = contador;

    formulario.reset();

});