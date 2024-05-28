// El código va aquí -> 

//Campos para hacer referencia //Llamar botones //agregar elementos

let btnAgregar = document.getElementById("btnAgregar"); //boton agregar
let btnClear = document.getElementById("btnClear"); //boton limpiar

let txtNombre = document.getElementById("Name"); // Nombre
let txtNumber = document.getElementById("Number"); // Cantidad

let alertaValidaciones = document.getElementById("alertaValidaciones");
let alertaValidacionesTexto = document.getElementById("alertaValidacionesTexto");

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }// if length
    function validarCantidad(){
        if (txtNumber.value.length==0){
            return false;
        }// if length
        if (isNaN(txtNumber.value)){
            return false;
        }//isNaN
    }
}    

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertaValidaciones.innerHTML="";
    alertaValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";
    if (txtNombre.value.length<3){
        alertaValidacionesTexto.innerHTML = "El <strong>Nombre</strong> no es correcto <br/>";
        alertaValidaciones.style.display="block";
        txtNombre.style.border="solid red medium";
        } //length<3
        if (! validarCantidad()){
            alertaValidaciones.innerHTML+="El <strong>Número</strong> no es correcto<br/>";
            alertaValidaciones.style.display="block";
            txtNumber.style.border="solid red medium";
            isValid = false;
        }//if ! validarCantidad


});

btnClear.addEventListener("click", function(event){
    event.preventDefault();

    txtNombre.value = "";
    txtNumber.value = "";

}) //Boton con funcionalidad
