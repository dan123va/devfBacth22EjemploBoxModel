"use strict"

// Todas las comparaciones (==, ===, !=, !==, >, >=, <, <=) 
// Dan como resultado true o false 
// True es igual a Si en nuestro lenguaje
// False es igual a No en nuestro lenguaje
console.log("Mi comparacion es.- ", 5 == 5);


// const => manera en que almacenamos un valor (const, var, let)
// nombre => como podemos acceder al valor guardado (numero1)
// Lo que va despues del = es el valor que se guardara (10)

// const no se puede modificar
// var si se puede modificar
// let si se puede modificar
let numeroRandom = document.getElementById("valor1").value; // => 10
const numeroEstable = 10 // respuesta que viene de algun lugar
const datoModificado = numeroRandom * 10;

// if (10 == 10) Comparacion que toma true o false
// Cuando se agrega solo 1 = es una asignación de valor
// Cuando se agrega 2 == es una comparacion de valores
// Cuando se agregan 3 === es una comparacion de valore y de tipos de datos

// Signo de negación
// ! -> un valor es true lo convierte a false
// ! -> un valor es false lo convierte a true

// == -> Es cuando son iguales
console.log("valores ", numeroRandom, numeroEstable);
if (numeroRandom === numeroEstable) {
    console.log('numeroRandom ', numeroRandom);
    console.log('datoModificado ', datoModificado);
    console.log('Ejemplo concatenacion.- ', "10" + 10);
    console.log('numeroRandom es un dato.- ', typeof numeroRandom);
    console.log('numeroEstable es un dato.- ', typeof numeroEstable);
    console.log("La suma de los valores.- ", parseInt(numeroRandom) + numeroEstable)
}

// != -> Es cuando son diferentes
if (numeroRandom != numeroEstable) {
    console.log('numeroRandom ', numeroRandom);
    console.log('datoModificado ', datoModificado);
    console.log('Ejemplo concatenacion.- ', "10" + 10);
    console.log('numeroRandom es un dato.- ', typeof numeroRandom);
    console.log('numeroEstable es un dato.- ', typeof numeroEstable);
    console.log("La suma de los valores.- ", parseInt(numeroRandom) + numeroEstable)
}

// > Mayor que
if (numeroRandom > numeroEstable) {
    console.log('numeroRandom ', numeroRandom);
    console.log('datoModificado ', datoModificado);
    console.log('Ejemplo concatenacion.- ', "10" + 10);
    console.log('numeroRandom es un dato.- ', typeof numeroRandom);
    console.log('numeroEstable es un dato.- ', typeof numeroEstable);
    console.log("La suma de los valores.- ", parseInt(numeroRandom) + numeroEstable)
}

// >= Mayor o igual
if (numeroRandom >= numeroEstable) {
    console.log('numeroRandom ', numeroRandom);
    console.log('datoModificado ', datoModificado);
    console.log('Ejemplo concatenacion.- ', "10" + 10);
    console.log('numeroRandom es un dato.- ', typeof numeroRandom);
    console.log('numeroEstable es un dato.- ', typeof numeroEstable);
    console.log("La suma de los valores.- ", parseInt(numeroRandom) + numeroEstable)
}

// < Menor que 
if (numeroRandom < numeroEstable) {
    console.log('numeroRandom ', numeroRandom);
    console.log('datoModificado ', datoModificado);
    console.log('Ejemplo concatenacion.- ', "10" + 10);
    console.log('numeroRandom es un dato.- ', typeof numeroRandom);
    console.log('numeroEstable es un dato.- ', typeof numeroEstable);
    console.log("La suma de los valores.- ", parseInt(numeroRandom) + numeroEstable)
}

// < Mayor o igual
if (numeroRandom <= numeroEstable) {
    console.log('numeroRandom ', numeroRandom);
    console.log('datoModificado ', datoModificado);
    console.log('Ejemplo concatenacion.- ', "10" + 10);
    console.log('numeroRandom es un dato.- ', typeof numeroRandom);
    console.log('numeroEstable es un dato.- ', typeof numeroEstable);
    console.log("La suma de los valores.- ", parseInt(numeroRandom) + numeroEstable)
}