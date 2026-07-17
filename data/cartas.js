// Este archivo es el almacén de datos.
// Por ahora los guardamos en memoria — más adelante usaremos una base de datos real.
let cartas = [
{ id: 1, nombre: "Dragón Blanco", tipo: "Dragón", poder: 3000, edicion: "Primera" },
{ id: 2, nombre: "Mago Oscuro", tipo: "Mago", poder: 2500, edicion:"Clásica" },
{ id: 3, nombre: "Guerrero Legendario", tipo: "Guerrero", poder: 1800, edicion: "Especial"},
{ id: 4, nombre: "Fénix de Fuego", tipo: "Ave", poder: 2700, edicion: "Limitada"},
{ id: 5, nombre: "Orbe de Cristal Eterno", tipo: "Artefacto", poder: 1500, edicion: "Mítica"}
];


// Exportamos el array para que otros archivos puedan usarlo
module.exports = cartas;