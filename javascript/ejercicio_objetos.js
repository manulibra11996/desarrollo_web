const estudiantes = [
    {
        id: 1,                          // 🆔 Identificador único (como DNI)
        nombre: "Ana López",            // 👤 Nombre completo  
        edad: 20,                       // 🎂 Edad del estudiante
        curso: "JavaScript",            // 📖 Curso que está tomando
        notas: [8.5, 9.0, 7.5],       // 📊 Array con todas sus calificaciones
        activo: true,                   // ✅ ¿Está matriculado actualmente?
        email: "ana@email.com"          // 📧 Contacto del estudiante
    },
    {
        id: 2,
        nombre: "Carlos Martín", 
        edad: 22,
        curso: "JavaScript",
        notas: [7.0, 8.5, 9.0],       // 📊 Diferentes notas para cada estudiante
        activo: true,
        email: "carlos@email.com"
    },
    {
        id: 3,
        nombre: "Elena García",
        edad: 19,
        curso: "JavaScript", 
        notas: [9.5, 9.0, 9.5],       // 📊 ¡Elena tiene las mejores notas!
        activo: false,                  // ❌ Elena ya no está activa
        email: "elena@email.com"
    }
];

console.log("===Listado de estudiantes===");
for (let index = 0; index < estudiantes.length; index++) {
    console.log(`\tEl estudiante ${estudiantes[index].nombre} con ${estudiantes[index].edad} años y el correo electronico ${estudiantes[index].email}.
    Esta en el curso ${estudiantes[index].curso} con estas notas ${estudiantes[index].notas}. 
    ¿Sigue activo en el curso? ${estudiantes[index].activo}.\n`);    
}

console.log("\n===Promedio===");
for (let index = 0; index < estudiantes.length; index++) {
    const est = estudiantes[index];
    let suma = 0;
    for (let i= 0; i < est.notas.length; i++) {
        suma += est.notas[i];
        
    }
    console.log(`El estudiante llamado ${estudiantes[index].nombre} tiene de promedio: ${(suma/estudiantes[index].notas.length).toFixed(2)}\n`);
}

console.log("\n===Estudiante de honor===");
let honor;
let promedioMax = 0;
for (let index = 0; index < estudiantes.length; index++) {
    const est = estudiantes[index];
    let suma = 0;
    let promedio;
   
    for (let i= 0; i < est.notas.length; i++) {
        suma += est.notas[i];
    }
    promedio = (suma/estudiantes[index].notas.length).toFixed(2);
    if (promedio > promedioMax) {
        honor = est.nombre;
        promedioMax = promedio;
    }
    
}
console.log(`El estudiante llamado ${honor} tiene el promedio mas alto de la clase: ${promedioMax}\n`);

console.log("\n===Estudiante activos===");
for (let index = 0; index < estudiantes.length; index++) {
    if (estudiantes[index ].activo) {
        console.log(`El estudiante llamado ${estudiantes[index].nombre} sigue en el curso ${estudiantes[index].curso}\n`);
    }else{
        console.log(`El estudiante llamado ${estudiantes[index].nombre} ha abandonado el curso ${estudiantes[index].curso}\n`);
    }
    
}