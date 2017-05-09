/*variables declaradas para crear los eventos y las funciones que ocuparemos*/
var restaurar  = document.getElementById("restaurar");
var imagen = document.getElementsByClassName("imagen");
var cerrar = document.getElementsByClassName("cerrar");
var longitud = imagen.length;
var texto1 = document.getElementById("lorem1");
var texto2 = document.getElementById("lorem2");
var origen = document.getElementById("origen");
var extincion = document.getElementById("extincion");

/*asignando eventos a los botones*/
restaurar.addEventListener("click",restaurarImagen);
origen.addEventListener("click", ocultarOrigen);
extincion.addEventListener("click", ocultarExtincion);
/*funcion para ocultar y momstrar el lorem2*/
function ocultarExtincion(){
	if(texto2.style.visibility=="hidden"){
		texto2.style.visibility="visible"
	} else {
		texto2.style.visibility="hidden";
	}
}
/*funcion para ocultar y ostrar el lorem1*/
function ocultarOrigen(){
	if(texto1.style.visibility=="hidden"){
		texto1.style.visibility="visible"
	} else {
		texto1.style.visibility="hidden";
	}
}
 /*for que sirve para agregar el evento para quitar la imagen*/   
for (var i = 0; i < cerrar.length; i++){
		cerrar[i].addEventListener("click",cerrarImagen);
	}
/*funcion para restaurar las imagenes*/
function restaurarImagen(){	
	for (var i = 0; i < longitud; i++){
		cerrar[i].style.display = "flex";
	}
}
/*funcion para cerrar las imagenes*/
function cerrarImagen(){
		this.style.display = "none";
}
