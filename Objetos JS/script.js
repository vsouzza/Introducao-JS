const motorista = {
    idade: 18,
    temCNH: true,
    temCarro: false
}

console.log(motorista)

motorista.idade += 1;
motorista.temCNH = false;
motorista.temCarro = true;

console.log(motorista)

// Ex.

const produto = {
    nome: "Amendoim",
    marca: "Dori",
    preco: "R$3",
    disponivel: true
}

console.log(produto.nome)
console.log(produto.preco)


// Laço de repetição

for(let contador = 0; contador <= 1; contador++ ){
    console.log(contador)
}

// Ex. 2

let numero = 7;

for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
    // console.log(numero + " x " + multiplicador + " = " + numero * multiplicador)
    console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`)
}

let contador = 1;
let numero_while = 12

while(contador <= 10){
    console.log(contador * numero_while);
    contador++;
}


// Ex. 3

let numero2 = 20;

while(numero2 >= 0){
    console.log(numero2);
    numero2+=-2;
}