function validarForm(){
    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var edad = document.getElementById('txtEdad').value;
    var sexo = document.getElementsByName('sexo');
    var deportes = document.getElementsById('cmbDeportes');
    
    if(nombre === ""){
        alert("Debe ingresar un nombre");
        return false;
    }

}