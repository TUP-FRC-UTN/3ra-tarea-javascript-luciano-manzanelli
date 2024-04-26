window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('primero').style.color = 'red';
}

console.log("Hola mundo desde un archivo externo");

//guardo algo en el localstorage, clave valor
localStorage.setItem("nombredeusuario", "Lucho");
//creo la variable y le mando el nombre de la key
var nombredeusuario = localStorage.getItem("nombredeusuario");
//muestro mi nombre
alert(nombredeusuario);
//borro el localstorage
localStorage.clear();

