//console.log() Mostra uma informação no console


console.log("Hello, World!");
console.log(2+2);

console.log(typeof "Hello, World"); //string
console.log(typeof 17); //number
console.log(typeof 10.5); //number
console.log(typeof true); //boolean
console.log(typeof false); //boolean

// váriavel 
const nome = "Vinicius";
console.log(nome); //var tipo string

//const idade = 17; // var tipo number, const não pode ter seu valor alterado durante o programa

//idade = 18;

let idade = 17; //var tipo let, let pode ter seu valor alterado durante o programa
console.log(idade)

console.log ("Olá " + nome, ", que tem " + idade + " anos.");

idade = 18;
console.log(idade)

console.log (`Olá, ${nome}, que tem ${idade} anos.`);

// EXERCICIO

const nome1 = "Alan";

let peso = 67;
// console.log(peso);
console.log (`Olá ${nome1} que pesa ${peso}kg`)

peso = 68

console.log (`Olá, ${nome1}, que pesa ${peso}kg. `)



const nome2 = "Ryan"
// console.log (nome2)

let dinheiro = 1631
let dinheiro1 = 0
// console.log (dinheiro)
console.log (`${nome2} tinha R$${dinheiro}, mas agora tem R$${dinheiro1}`)


// MÉTODOS DE STRING

const texto = "JacksOn StOrm"

console.log (texto.length) 
//conta quantos caracteres a string tem

//altera todas as letras para maiúsclo
console.log (texto.toUpperCase())
//altera todas as letras para minúsculo
console.log (texto.toLowerCase())

const nome_completo = "Vinícius Souza Conde"
console.log(nome_completo.includes("Souza")) //verifca se o include é true ou false
console.log(nome_completo.includes("Santos"))

console.log(10 > 5)
console.log(10 < 5)
console.log(10 >= 10)
console.log(10 <= 5)
console.log("10" == 10) //true
console.log("10" === 10) //false
console.log(10 !== 5) //true

const idade_pessoa = 17

console.log(idade_pessoa >= 18) //false
console.log(idade_pessoa >= 16) //true

// EXERCICIO 2

const nome_pessoa = "Brenno"

console.log(nome_pessoa == "brenno")

// coletamos a idade da pessoa
let pessoa_idade = 19;
// verificar se a idade é maior ou igual que 18
if(pessoa_idade >= 18){
    // se maior ou igual  que 18 então ela é maior de idade
    console.log("Já pode ser preso HAHAHAHAAHAHAH!")
}
else{ //só funciona quando o if é falso
    console.log("Não vai pra balada!😂😂😂")
    // se menor que 18 então ela é menor de idade
}

// coletamos a idade da pessoa
    let idade_votacao = 16
// verificar se a idade da pessoa é maior que 70
    if (idade_votacao > 70){
        console.log("Você não é obrigado a votar!")
    }else if(idade_votacao >= 18){
        console.log("Você tem que votar obrigatoriamente!")
    }else if (idade_votacao >= 16){
        console.log("Você não é obrigado a votar, mas caso queira, pode!")
    }else{
        console.log("Você NÃO pode votar!")
    }
// senão, se a idade da pessoa for maior ou igual a 18
// senão, se a idade da pessoa for maior ou igual a 16
//senão for nenhuma das alternastivas anteriores

// EXERCICIOS

// 1

const nota_final = 8
if (nota_final >= 7){
    console.log("Você foi aprovado!")
}else{
    console.log("Você foi reprovado.")
}

// 2

let resultado1 = 5
let resultado2 = 5
if (resultado1 > resultado2){
    console.log("O primeiro resultado é maior")
}else if (resultado1 < resultado2){
console.log("O segundo resultado é maior")
}else{
    console.log("Empate")
}

// 3

const senha_senai = "senai123"

if (senha_senai == "senai123"){
    console.log("Acesso autorizado!")
}else{
    console.log("Senha incorreta.")
}

//4

let temperatura = 20

if (temperatura < 18){
    console.log("Frio")
}else if (temperatura > 27){
    console.log("Quente")
}else{
    console.log("Agradável")
}

//5

let class_nota = 9

if (class_nota < 5){
    console.log("Insuficiente")
}else if (class_nota <= 7){
    console.log("Regular")
}else if (class_nota < 9){
    console.log("Bom")
}else (class_nota >= 9); {
    console.log("Excelente")
}

//6

let dia_semana = 1

if (dia_semana == 1){
    console.log("Domingo")
}else if (dia_semana == 2){
    console.log("Segunda-feira")
}else if (dia_semana == 3){
    console.log("Terça-feira")
}else if (dia_semana == 4){
    console.log("Quarta-feira")
}else if (dia_semana == 5){
    console.log ("Quinta-feira")
}else if (dia_semana == 6){
    console.log ("Sexta-feira")
}else if (dia_semana == 7){
    console.log (Sábado)
}else{
    console.log ("Dia inválido")
}