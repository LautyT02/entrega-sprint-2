//Declaración de variables Globales
var suma = 0;
var i = 0;
var datos =[];
//Obtención de elementos del HTML
const listaNombreYmonto = document.querySelector('#nombreYmonto');
const total = document.getElementById('total');
const cadaUno = document.getElementById('c/uno');
//Función que se ejecuta cada vez que se envían los datos
function ejecutar() {
    if (extraerYvalidarValores()) {
        mostrarNombreYmonto(datos[i-1]);
        calculosEimpresion(datos[i-1].pago);
        continuar = false;
    }
}
function extraerYvalidarValores() {//Extrae los valores del formulario y llama a la función de validación. retorna un booleano
    //Obtención de los datos del HTML
    let nombre = document.getElementById('inputNombre').value;
    let monto=parseFloat(document.getElementById('inputMonto').value);
    //Validación de Datos
    return validarValores(nombre,monto);
}
function validarValores(nombre,monto){//valida los valores del formulario. Retorna un booleano
    if (nombre == '') {
        alert("Debe ingresar un nombre");
        return false;
    }
    if (monto < 0 || isNaN(monto)) {
        alert("Ingrese un monto válido");
        return false;        
    }
    datos[i]={id: i, persona: nombre, pago: monto}//Se almacenan los datos
    i++;//Actualización índice
    return true;
}
function mostrarNombreYmonto(valores) {//dados los datos extraidos del formulario (ya validados), los escribe en la lista del html
    let idNyM = String(valores.id)+','+String(valores.persona)+','+String(valores.pago);//Generación de ID
    //Escritura de valores al HTML
    listaNombreYmonto.innerHTML += `<li class="list-group-item" id="${idNyM}">${valores.persona}: $ ${valores.pago} 
    <button type="button" class="btn btn-primary" onclick="borrar('${idNyM}')">Borrar Elemento</button></li>`;
}
function calculosEimpresion(aporte) {//Actualiza el total, calcula el promedio y escribe los valores en el html. No retorna nada
    let promedio;
    //Cálculos
    suma += aporte;
    if (i == 0) {
        promedio = 0;
    }
    else {
        promedio = suma / i;
    }
    //Actualización HTML
    total.innerHTML = `$ ${suma}`;
    cadaUno.innerHTML = `$ ${promedio}`;
}
function borrar(id) {//Dado el id del elemento, lo elimina del arreglo y del html y modifica el total y el promedio. no retorna nada
    //Declaración y Asignación de Variables
    let datosBorrar=valoresDeId(id);//Extracción de datos
    let posicion=posicionBorrar(datosBorrar);
    if(posicion != -1){
        //Modificación Total Y Promedio
        i--;//Actualización índice
        calculosEimpresion(-datos[posicion].pago)
        datos.splice(posicion,1);//Se elimina del arreglo
        document.getElementById(id).remove();//Se elimina del HTML
    }
    else{
        alert('Error al Borrar el gasto');
    }
}
function valoresDeId(id){//Dado el id del elemento de la lista, extrae los datos y los reorna en forma de objeto
    let datosBorrar = id.split(',');//Separación del String a arreglo de palabras
    //Guardado de cada dato en variable individual del tipo correspondiente
    let borrarId = Number(datosBorrar[0]);
    let borrarPersona = datosBorrar[1];
    let borrarPago = Number(datosBorrar[2]);
    return {id: borrarId, persona: borrarPersona, pago: borrarPago}//Devolver Datos en forma de objeto
}
function posicionBorrar(datosBorrar){//Dados los datos como objeto retorna la posición a eliminar
    let borrar=true;
    //Se obtiene la posición a partir de comparar los datos del arreglo con los obtenidos del id
    for(let a in datos){
        for(let b in datos[a]){
            borrar=(datos[a][b]==datosBorrar[b] && borrar);
        }
        if(borrar){
            return a;//Se guarda la posición en la que coinciden los 3 datos
        }
        else{
            borrar=true;
        }
    }
    return -1;
}
function borrarTodos(){
    for(let j = 0; j < i; j){
        let id= String(datos[j].id)+','+String(datos[j].persona)+','+String(datos[j].pago);
        borrar(id);
    }
}