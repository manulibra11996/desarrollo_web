function hola() {
    console.log("Hola");
};



function saludarPersonas(nombre,edad) {
    console.log("Hola " + nombre);
    console.log("Tienes " + edad + " años")
};



function suma(num1,num2){
    console.log(num1+num2);
};


function saludo(nombre="Amigo", saludo="¡Hola ") {
    console.log(saludo + ", " + nombre + "!");
};

function suma2(a=0,b=0){
    console.log(a+b);
};

function saludarPersona(nombre) {
    console.log("¡Hola " + nombre + "!");
};

function resta(a=0,b=0) {
    return a-b;
};

const resultado = resta(4,2);


function calcular(numero1,numero2,operacion = "sumar") {

    let resultado;
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
        break;
        
        case "resta":
            resultado = numero1 - numero2;
        break;

        case "multiplicar":
            resultado = numero1 * numero2;
        break;

        case "division":
            resultado = numero1 / numero2;
        break;

        default:
            resultado = "Operacion no aceptada";
        break;
    }
    
    console.log("El resultado es " + resultado)
};

const doblar = (numero) => {
    return numero*2;
};


const sumar = (numero1,numero2) => {
    return numero1+numero2;
};

// Ejercicios

function suma2(a=0,b=0){
    return a+b;
};



//1) Pares del 2 al 30 (sin filtrar)
function pares2Al30() {
    for (let index = 2; index < 31; index += 2) {
        console.log(index);
    }
}


//2) Cuenta atrás del 10 al 1
function cuentaAtras(){
    for (let index = 10; index > 0; index--) {
        console.log(index);
    }
}

//3) Mostrar 10 animales (solo recorrer)
function animales() {
    let animalesSalvajes=["León","Tigre","Elefante","Jirafa","Delfín","Pingüino","Lobo","Canguro","Búho","Mariposa"];
    for (let index = 0; index < animalesSalvajes.length; index++) {
        console.log(animalesSalvajes[index]);
    }
}

//Números en posiciones pares del array (0,2,4,...)
function paresArray(){
    const veinteNumeros = [10, 5, 8, 15, 22, 3, 17, 9, 30, 11, 6, 19, 4, 25, 12, 2, 18, 7, 14, 20];
    for (let index = 0; index < veinteNumeros.length; index += 2) {
        console.log(index + " " + veinteNumeros[index]);
    }
}

// 5) Sumar todos los elementos de un array
function sumaArray(){
    const veinteNumeros = [10, 5, 8, 15, 22, 3, 17, 9, 30, 11, 6, 19, 4, 25, 12, 2, 18, 7, 14, 20];
    let suma = 0;
    for (let index = 0; index < veinteNumeros.length; index++) {
        suma += veinteNumeros[index];
    }
    console.log(suma);
}

//6) Promedio de notas (decisión FUERA del bucle)
function promedio(notas) {
    let suma = 0;
    for (let index = 0; index < notas.length; index++) {
        suma += notas[index];
    }
    let promedio = suma / notas.length;
    console.log(promedio);
}

// 7) Tabla de multiplicar (sin condicionales)
function tablaMultiplicar(num) {
    for (let index = 1; index <= 10; index ++) {
        console.log(index + " x " + num + " = " + num * index);
    }
}


//8) Invertir un array (recorrer hacia atrás)
function array(numeros) {
    for (let index = numeros.length-1; index >= 0; index --) {
        console.log(numeros[index]);
    }
}

//9) Generar los primeros 10 múltiplos de 3
function multiplos3() {
    for (let index = 1; index <= 10; index++) {
        console.log(index*3);
    }
}

//10) Buscar un elemento (decisión fuera; el bucle solo imprime)
function elemento(array) {
    for (let index = 0; index <= array.length; index++) {
        if(array[index] == 20){
            console.log(array[index])
        }
    }
}

//elemento([10, 5, 8, 15, 22, 20, 17, 9, 30, 11, 6, 19, 4, 25, 12, 2, 18, 7, 14, 20]);

//11) Mostrar solo los 5 primeros elementos (límite decidido antes)
function elemento5(array) {
    for (let index = 0; index < 5; index++) {
        console.log(array[index]);
    }
}

//elemento5([10, 5, 8, 15, 22, 20, 17, 9, 30, 11, 6, 19, 4, 25, 12, 2, 18, 7, 14, 20]);

//12) Serie de pares hasta N (elige dirección antes del bucle)
function pares(mostrar,dirección) {
    if (dirección == "adelante") {
        for (let index = 1; index <= mostrar; index++) {
        console.log(index*2);
        }
    } else if (dirección == "atras") {
        for (let index = mostrar; index > 0; index--) {
            console.log(index*2);
        }
    } else {
        console.log("dirreccion no aceptada");
    }
    
}

pares(10,"arriba");