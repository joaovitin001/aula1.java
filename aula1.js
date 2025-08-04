//comentario de linha
// Primeiro código Olá Mundo

const { read } = require('fs');

/*
console.log("Hello, World!");
console.log("This is aula1.js");

let nome = "João"; // String
let idade = 30; // Number
let estudante = true; // Boolean
let notas = [10, 9, 8]; // Array
let aluno = { nome: "João", idade: 25 }; // Object

console.log("Olá:", aluno.nome,"você tem", aluno.idade, "anos");


console.log(idade);
console.log(estudante);
console.log(notas);
console.log(aluno);

let idadeUsuario = 25;
const anoNAS = 1999;

console.log( "Idade usuario:", idadeUsuario);
console.log("Ano de nascimento:", anoNAS);

idadeUsuario = 26; 
console.log("Idade usuario atualizado:", idadeUsuario);

//anoNAS = 2000; // errado. nao pode ser alterado o valor de uma constante
//console.log("Ano de nascimento:", anoNAS);//


console.log(typeof idadeUsuario);
console.log(typeof anoNAS);


let num1 = 10;
let num2 = 20;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = 10 % 3;

console.log("Resultado da soma:", soma);
console.log("Resultado da subtração:", subtracao);
console.log("Resultado da multiplicação:", multiplicacao);
console.log(`Resultado da divisão: ${divisao}`);
console.log("Resto da divisão:", resto);

const  idade = 19;
const numTexto = "10";

console.log(Idade >=idade);
console.log(10 == numTexto); // comparação de valor
console.log(10 === numTexto); // comparação de valor e tipo
console.log(10 != numTexto); // comparação de valor
*/
const idadeMinima =18;
const temIngresso = true;


let podeEntrar = (idadeMinima >= 18) && (temIngresso == true);
console.log("Pode entrar na festa?:", podeEntrar);
let portaAberta = true;
console.log(!portaAberta); // Inverte o valor de portaAberta

const readline = require('readline').createInterface({
    input: process.stdin, // define que a entrada virá do teclado 
    output: process.stdout // define que a saída será no console 
});

// => 
readline.question('Número 1: ', (n1) => {
    readline.question('Número 2: ', (n2) => {
    console.log("Soma:", Number(n1) + Number(n2));
    readline.close(); // fecha a interface de leitura
    });
})
 
if (condicao) {
    // resultado verdadeiro
} else {
    // resultado falso
}

let idade = 20;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}