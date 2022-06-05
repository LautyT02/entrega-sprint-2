let suma=0;
let promedio=0;
let cantVal=0;
let nombre="Nombre";
let monto=0;
let continuar=false;
const listaNombreYmonto = document.querySelector('#nombreYmonto');
const total = document.getElementById('total');
const cadaUno = document.getElementById('c/uno');

function ejecutar(){
    extraerValores ();
    if (continuar==true ){
        mostrarNombreYmonto(nombre,monto);
        calculosEimpresion();
        continuar=false;
    }
    else {
        alert("Ingrese un monto válido");
    }
    
}
function extraerValores(){
    nombre= document.getElementById('inputNombre').value;
    monto=parseFloat(document.getElementById('inputMonto').value); 
    if(monto>=0){
        continuar=true;
        cantVal++;
    }
}
function mostrarNombreYmonto (_nombre,_monto) {
    listaNombreYmonto.innerHTML += `<li class="list-group-item">${_nombre}: $ ${_monto}</li>`;
}
function calculosEimpresion(){
    console.log("Ejecución calculosEimpresion");
    suma+=monto;
    console.log(suma);
    console.log(cantVal);
    promedio=suma/cantVal;
    total.innerHTML = `$ ${suma}`;
    cadaUno.innerHTML = `$ ${promedio}`;
}