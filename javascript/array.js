let listavacia = [];
let miLista = ["Ana", "Lopez", 37, "Sevilla"];
console.log(miLista[0]);

miLista.length;
miLista.push("Luis", "Juan", 45);
console.log(miLista);
miLista.unshift(12, 35, true);
console.log(miLista);
//miLista.pop();
//console.log(miLista);
//miLista.shift();
//console.log(miLista);
console.log(miLista.indexOf("Sevilla"));
console.log(miLista.indexOf(40));
console.log(miLista.includes(37));
console.log(miLista.includes(40));
miLista.splice(3,1,"Marta");
console.log(miLista);
miLista.splice(0,1,"Torres","Herrantes");
console.log(miLista);

miLista.forEach(element => {
    console.log(element)
});