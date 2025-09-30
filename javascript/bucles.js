let contadorWhile = 1;

while (contadorWhile <= 10){
    console.log("Numero: " + contadorWhile);
    contadorWhile++;
};

console.log();

let colores = ["rojo","azul","verde","amarillo"];

let posicion = 0;

while (posicion < colores.length) {
    console.log(`Color ${posicion + 1}: ${colores[posicion]}`);
    posicion++;
}

console.log();
let numero = 1;
let suma = 0;

while (suma < 20){
    suma += numero;
    console.log(`Sumamos ${numero}, total: ${suma}`);
    numero++;
}

console.log(`!Hemos llegado a ${suma}!`)

console.log()
console.log("Ejercicio")
let contadorEjercicioWhile = 10;

while (contadorEjercicioWhile > 0) {
    console.log(contadorEjercicioWhile);
    contadorEjercicioWhile --;
}



console.log()
console.log("For")

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log()
console.log("Ejercicio")
for (let i = 1; i < 6; i++) {
    console.log(i);
}

console.log()
let animales = ["perro","gato","pájaro"];
for (let index = 0; index < animales.length; index++) {
    console.log(`Animal ${index + 1}: ${animales[index]}`)
    
}

console.log()
let numeros = [10,20,30,40,50];
let sumaNumeros = 0;
for (let index = 0; index < numeros.length; index++) {
    sumaNumeros += numeros[index];
    console.log(`Suma parcial: ${sumaNumeros}`)
}

console.log(`La suma total es: ${sumaNumeros}`)
