let alumno1 ={
    nombre: "Ana",
    edad: 37,
    notas: [8.5,9,7.5],
    salir: function() {
        console.log("El alumno puede salir " + this.nombre);
    },
    
    media:function() {
        let suma = 0;

        for (let index = 0; index < this.notas.length; index++) {
            suma+=this.notas[index];
            
        }

        return (suma / this.notas.length).toFixed(2) ;
    }
};

alumno1.edad=25;
alumno1.telefono=656971071;

alumno1.asignatura="matematicas";

/*console.log(alumno1);

alumno1.salir();
console.log(alumno1.media());*/


/*let alumno2 ={
    nombre: "Luis",
    edad: 37,

};

/*console.log(alumno2);
console.log(alumno1);

console.log(alumno1.nombre);
console.log(alumno2.edad);

let edades=alumno1.edad;
console.log(edades);*/

/*const estudiante = {
    nombre: "Ana López",
    edad: 20,
    curso: "JavaScript",
    activo: true,
    nota: 8.5
};

/*console.log("=== INFORMACIÓN DEL ESTUDIANTE ===");*/
/*for (let propiedades in estudiante) {

    /*console.log(propiedades + " : " + estudiante[propiedades]);*/
/*}

console.log();
const formulario = {
    nombre: "Ana",
    email: "",           // ❌ Vacío
    telefono: "123456789",
    edad: "",             // ❌ Vacío
    acepta: true
};

// Validar TODOS los campos automáticamente
/*console.log("🔍 Validando formulario...");

let camposVacios = [];
let totalCampos = 0;

for (let campo in formulario) {
    totalCampos++;
    
    // Verificar si está vacío
    if (formulario[campo] === "" || formulario[campo] === null) {
        camposVacios.push(campo);
        console.log("❌ " + campo + ": VACÍO");
    } else {
        console.log("✅ " + campo + ": " + formulario[campo]);
    }
}

// Mostrar resumen final
console.log(`\n📊 RESUMEN: ${totalCampos - camposVacios.length}/${totalCampos} campos completos`);

if (camposVacios.length > 0) {
    console.log("⚠️ Faltan: " + camposVacios.join(", "));
} else {
    console.log("🎉 ¡Formulario completo!");
}*/
"Smartphone"

const productos = [
    // PRODUCTO 1: Un objeto con 5 propiedades
    {
        id: 1,                    // Número identificador único
        nombre: "Smartphone",     // Texto con el nombre del producto
        precio: 599.99,           // Número decimal con el precio
        categoria: "Electrónicos", // Texto con la categoría
        enStock: true             // Boolean: true = disponible, false = agotado
    },
    // PRODUCTO 2: Mismo formato, diferentes valores
    {
        id: 2,
        nombre: "Auriculares",
        precio: 79.99,
        categoria: "Electrónicos", 
        enStock: false            // Este producto NO está disponible
    },
    // PRODUCTO 3: Otro producto más
    {
        id: 3,
        nombre: "Libro JavaScript",
        precio: 29.99,
        categoria: "Libros",
        enStock: true
    }
];


console.log("Tenemos " + productos.length + " productos.");