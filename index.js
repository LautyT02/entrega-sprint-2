let suma = 0;
let promedio = 0;
let cantVal = 0;
let i = 0;
let nombre = "";
let monto = [];
let continuar = false;

const listaNombreYmonto = document.querySelector('#nombreYmonto');
const total = document.getElementById('total');
const cadaUno = document.getElementById('c/uno');
/*const btnBorrar = document.getElementById('boton-borrar');*/

function ejecutar() {
    extraerValores();
    if (continuar == true) {
        mostrarNombreYmonto(nombre, monto[i]);
        calculosEimpresion();
        continuar = false;
    }
    else {
        alert("Ingrese un monto válido");
    }

}
function extraerValores() {
    nombre = document.getElementById('inputNombre').value;
    monto.push(parseFloat(document.getElementById('inputMonto').value));
    if (monto[cantVal] >= 0) {
        continuar = true;
        cantVal++;
        i = cantVal - 1;
    }
}
function mostrarNombreYmonto(_nombre, _monto) {
    let idNyM = "valor " + i;
    console.log(idNyM);
    listaNombreYmonto.innerHTML += `<li class="list-group-item" id="${idNyM}">${_nombre}: $ ${_monto}</li>`;
}
function calculosEimpresion() {
    suma += monto[i];
    promedio = suma / cantVal;
    total.innerHTML = `$ ${suma}`;
    cadaUno.innerHTML = `$ ${promedio}`;
}
function borrar() {
    let index = "valor " + i;
    console.log("borrar:");
    console.log(index);
    document.getElementById(index).remove();
    suma -= monto[i];
    monto.pop();
    cantVal--;
    i = cantVal - 1;
    if (suma == 0) {
        promedio = 0;
    }
    else {
        promedio = suma / cantVal;
    }
    total.innerHTML = `$ ${suma}`;
    cadaUno.innerHTML = `$ ${promedio}`;
}