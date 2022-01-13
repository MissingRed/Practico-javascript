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
