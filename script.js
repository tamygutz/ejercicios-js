// Tamara Gutiérrez 
// Ejercicios Introducción a Java Script 
const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];


console.log("Tamara Gutiérrez"); 
console.log("ejercicio1");

function EsPrimo(numero){
  let primo =true; 
  for(indice=numero-1; indice>1; indice --){
    if(numero%indice==0){
      console.log(`el numero: ${numero} es divisible entre ${indice} por tanto no es primo`);
      primo= false; 
      break;
    }
  }
if(primo==true){
  console.log(`el numero: ${numero} es primo`);
}
}
ejercicio1.forEach((numero) => {
  EsPrimo(numero);
}); 

// ejercicio 2 
console.log("////////////////////////////////////////////");
console.log("ejercicio2"); 
console.log("////////////////////////////////////////////");
function Admitidos(persona){
  if(persona.edad>=18 && persona.esFamiliar){
    console.log(`${persona.nombre} es admitido en la fiesta`); 
  }
}

ejercicio2.forEach((persona) => {
  Admitidos(persona);
}); 

//ejercicio 3
console.log("///////////////////////////////////////////");
console.log("ejercicio 3"); 
console.log("///////////////////////////////////////////"); 

const sucesionfibonacci = (limite) => {
  const fibonacci = [1,2];
  for (let i=2 ; i<limite; i++){
    fibonacci[i] = fibonacci [i-1] + fibonacci[i-2];
  }
  return fibonacci; 
}

let serieFibonacci = sucesionfibonacci(50);
console.log(serieFibonacci);
