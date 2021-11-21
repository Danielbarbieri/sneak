// Atividade 1


let parcelas = 36;
let valorTotal = 1000;

let valorParcelas12 = (valorTotal * 1.1) / parcelas;
let valorParcelas24 = (valorTotal * 1.15) / parcelas;




if (parcelas < 12) {
  console.log("minímo 12 parcelas")
} else if (parcelas < 24) {
  console.log("O valor das parcelas serão de R$ " + valorTotal / parcelas)
} else if (parcelas >= 24 && parcelas < 36) {
  console.log("O valor das parcelas serão de R$ " + Math.round(valorParcelas12))
} else if (parcelas >= 36) {
  console.log("O valor das parcelas serão de R$ " + Math.round(valorParcelas24))
}


// Atividade 2

let peso = 250
let altura = 1.90

let calcImc = peso / (altura * altura)



if (calcImc < 18) {
  console.log("Muito abaixo do peso", "alerta")
} else if (calcImc >= 18 && calcImc < 26) {
  console.log("Peso normal", "sucesso")
} else if (calcImc >= 26 && calcImc < 31) {
  console.log("Acima do peso", "cuidado")
} else if (calcImc > 30) {
  console.log("Obesidade I", "alerta")
}


//Atividade 3

let ladoA = 10
let ladoB = 10
let ladoC = 10

if (ladoA == ladoB && ladoB == ladoC) {
  console.log("equilátero")
} else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
  console.log("isósceles")
} else {
  console.log("escaleno")
}


//Atividade 4


let temp = 20
let pais = 'brasil'
let celcius = (temp - 32) * 5 / 9
let fahrenheit = temp * 9 / 5 + 32


if (pais == 'brasil') {
  console.log(fahrenheit)
} else {
  console.log(celcius)
}


//Atividade 5



