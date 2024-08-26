
/* EStta  estructura sirve para agregar aun elemnto de HTML un valor de string, en este caso a el elemnto 'p' se le agrego el string 'indica un numero del 1 al 10'
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/
let numeroSecreto = 0;//generaNumeroSecreto(); //note que esta funcion esta definia abajo pero de todos modos corre el codigo.
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

console.log(numeroSecreto);
/*las funciones no importa donde las defina pues js hace primero una lectura del todo el codigo y re ubica las variables 
y funciones al inicio de este este proceso se llama hosting. 
*/
/* las funciones pueden recibir parametros, los cuales aparecen registrados dentro del parentesis despues de la funcion */ 
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    /*let numeroDeUsuario = document.querySelector('input'); /*la etiqueta input esta representada en HTML como el cuadrado blanco
    esta funcion querySelector busca en el ahtm la palabra imput*/
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log("intento"+intentos)
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //cuando no acierta
        if (numeroDeUsuario > numeroSecreto){ 
            asignarTextoElemento('p', 'El numero secreto es menor')
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    /*//Cuando quiere seleccionar un el evento por idi utilizando querySelector se emplea un numeral y luego el id
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    */
   //lo anterrior se puede resumir en la siguiente linea de texto.
   document.querySelector('#valorUsuario').value = '';
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //lo que sigue acontinuacion permite revisar si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
    } else {
        //si el numero generado esta incluido en la lista
        if ( listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();// aqui tiene una recursividad pues vilve a llamarse a si misma
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','El juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos =1;

}

function reiniciarJuego() {
    //lo que hace esta funcion es:
    // Limpia la caja  
    limpiarCaja();
    // reinicia el valor de p a selecionar un numero de 1 a 10
    // generar un numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();

// DE A QUI HACIA ABAJO NO ES RELEVANTE SON EJEMPLOS 
/* En esta seccion van algunos eejrcios de la clase 2
function saludiConsola(nombre) {
    console.log("hola "+nombre+"!");
} 
saludiConsola(prompt("ingrese un nombre"));

function duplicameme(numerin){
    let doble = parseInt(numerin)*2;
    return doble;
}
*/
