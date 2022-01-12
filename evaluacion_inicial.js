let nombre = "Daniel";
let apellido = "Rodriguez";
let usuario = "missingred";
let edad = 22;
let correo = "example@gmail.com";
let edad = true;
let ahorrado = 200.23;
let deudas = 110.23;

let nombre_completo = nombre + apellido;

console.log(nombre_completo);

let dinero_real = ahorrado - deudas;

console.log(dinero_real);

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log(
  "Mi nombre es " +
    completeName +
    ", pero prefiero que me digas " +
    nickname +
    "."
);

function usuario(completeName, nickname) {
  return (
    "Mi nombre es " +
    completeName +
    ", pero prefiero que me digas " +
    nickname +
    "."
  );
}

console.log(usuario(completeName, nickname));

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion == "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

let planes = [
  { name: "FREE", desc: "Solo puedes tomar los cursos gratis" },
  {
    name: "BASIC",
    desc: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  },
  {
    name: "EXPERT",
    desc: "Puedes tomar casi todos los cursos de Platzi durante un año",
  },
];

const planPlatzi = (plan) => {
  var tipoDeSuscripcion = planes.find(
    (element) => element.name === plan.toUpperCase()
  );

  if (tipoDeSuscripcion) {
    console.log(tipoDeSuscripcion.desc);
  }
};

planPlatzi("basic");

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

//FOR ANTERIOR A WHILE

let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

//FOR ANTERIOR A WHILE
let i = 10;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}

let dato = 0;
do {
  dato = prompt("¿Cuanto es 2+2?");
} while (dato != 4);
alert("Felicitaciones!");

let element = ["cero", "uno", "dos", "tres"];

function primerElemento(array) {
  console.log("El primer elemento es: " + array[0]);
}

primerElemento(element);

let element1 = ["cero", "uno", "dos", "tres"];

function todosLosElementos(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
  }
}

todosLosElementos(element1);

let object = {
  nombre: "Daniel",
  edad: 22,
  sexo: "Masculino",
};

function nameObject(object) {
  for (const key in object) {
    console.log("Recorrido: " + object[key]);
  }
}

nameObject(object);
