

let perro = {
    propietario: {
    nombre: 'Juan',
    edad: 34,
    lugar: {
    pais: 'Chile',
    ciudad: 'Santiago de Chile'
    },
    },
    raza: 'Pastor Alemán',
    origen: 'Alemania',
    pelaje: 'Lanudo',
    peso: '30kg',
    edad: 11,
    amigable: true,
};

let keys = Object.keys(perro)
console.log(keys);

let values = Object.values(perro)
console.log(values);

let entries = Object.entries(perro)
console.log(entries);

// set 

let set2 = new Set("hooola");
console.log(set2);

set2.add(2); // agreaga al array creado por set
set2.add(5);
console.log(set2)

set2.delete(2) // deletea el numero 2
console.log(set2)

set2.forEach(function(item){
    console.log(item);
});

let arreglo = new Set("06-07-1985");

arreglo.delete("5")
arreglo.delete("8")
arreglo.delete("9")
arreglo.delete("1")
arreglo.add("j")
arreglo.add("u")
arreglo.add("l")
arreglo.add("i")
arreglo.add("o")
arreglo.forEach(function(a){
    console.log(a);
})
console.log(arreglo)

