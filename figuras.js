// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log("El area del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//Código del circulo
console.group("Círculos");

// // Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro

function diametroCirculo(radio) {
  return radio * 2;
}

// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const pi = Math.PI;
console.log("Pi es: " + pi);

// Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);

  return diametro * pi;
}
// console.log("El perimetro del circulo es: " + perimetroCuadrado + "cm");

// Area

function areaCirculo(radio) {
  return radio * radio * pi;
}
// console.log("El area del circulo es: " + areaCirculo + "cm2");

console.groupEnd();

// Interactuar con HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const input2 = document.getElementById("inputTriangulo2");
  const input3 = document.getElementById("inputBaseTriangulo");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);
  const perTrian = perimetroTriangulo(value1, value2, value3);

  alert(perTrian);
}

function calcularAreaTriangulo() {
  const inputAltura = document.getElementById("inputAlturaTriangulo");
  const inputBase = document.getElementById("inputBaseTriangulo");

  const valueAltura = inputAltura.value;
  const valueBase = inputBase.value;
  const areaTrian = areaTriangulo(valueBase, valueAltura);

  alert(areaTrian);
}
