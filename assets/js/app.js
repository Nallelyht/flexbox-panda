var restaurar  = document.getElementById("restaurar");
var imagen = document.getElementsByClassName("imagen");
var cerrar = document.getElementsByClassName("cerrar");
var longitud = imagen.length;
var texto1 = document.getElementById("lorem1");
var texto2 = document.getElementById("lorem2");
var origen = document.getElementById("origen");
var extincion = document.getElementById("extincion");


restaurar.addEventListener("click",restaurarImagen);
origen.addEventListener("click", ocultarOrigen);
origen.addEventListener("dblclick", mostrarOrigen);
extincion.addEventListener("click", ocultarExtincion);
extincion.addEventListener("dblclick", mostrarExtincion);

function mostrarExtincion(){
    texto2.style.visibility="visible";
}

function ocultarExtincion(){
    texto2.style.visibility="hidden";
}
function mostrarOrigen(){
    texto1.style.visibility="visible";
}

function ocultarOrigen(){
    texto1.style.visibility="hidden";
}
for (var i = 0; i < cerrar.length; i++){
		cerrar[i].addEventListener("click",cerrarImagen);
	}

function restaurarImagen(){
	
	
	for (var i = 0; i < longitud; i++){
		cerrar[i].style.display = "inline-block";
	}
	console.log(longitud);
	console.log(imagen);
}

function cerrarImagen(){
		this.style.display = "none";
	
}
