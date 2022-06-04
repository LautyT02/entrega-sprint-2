let nombre="Nombre";
let monto=5;
const listaNombreYmonto = document.querySelector('#nombreYmonto');
function ejecutar(){
    mostrarNombreYmonto(nombre,monto);
}
function mostrarNombreYmonto (_nombre,_monto) {
    listaNombreYmonto.innerHTML += `<li class="list-group-item">${_nombre}: $${_monto}</li>`;
}