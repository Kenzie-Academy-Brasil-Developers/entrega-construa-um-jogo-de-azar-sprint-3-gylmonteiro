const result = document.getElementById("resultadoDisputa")
// console.log(result)

const buttonPedra = document.getElementById("escolhaPedra");
const buttonTesoura = document.getElementById("escolhaTesoura");
// console.log(tesoura)
const buttonPapel = document.getElementById("escolhaPapel");

//Função de comparação
// const disputa = function () {
//     //Escolha da máquina
//     let choices = ['papel', 'tesoura', 'pedra']
//     let tamanho_array = choices.length
//     let nAleatorio = Math.floor(Math.random() * tamanho_array);
//     let retornoAleatorio = choices[nAleatorio]
//     console.log (retornoAleatorio)
//     };

    
buttonPedra.addEventListener('click',()=> {
    // escolha da máquina
    let choices = ['papel', 'tesoura', 'pedra']
    let tamanho_array = choices.length
    let nAleatorio = Math.floor(Math.random() * tamanho_array);
    let retornoAleatorio = choices[nAleatorio];
    const choiceUser = "pedra";
    if (retornoAleatorio === choiceUser) {
        const empate = document.createElement("p");
        empate.innerHTML ="Empatou";
        result.appendChild(empate);
    } else if (retornoAleatorio === "papel" ) {
        const empate = document.createElement("p");
        empate.innerHTML ="Você perdeu";
        result.appendChild(empate);
    } else {
        const empate = document.createElement("p");
        empate.innerHTML ="Você Ganhou";
        result.appendChild(empate);
    }
});

buttonTesoura.addEventListener('click',()=> {
    // escolha da máquina
    let choices = ['papel', 'tesoura', 'pedra']
    let tamanho_array = choices.length
    let nAleatorio = Math.floor(Math.random() * tamanho_array);
    let retornoAleatorio = choices[nAleatorio];
    const choiceUser = "tesoura";
    if (retornoAleatorio === choiceUser) {
        const empate = document.createElement("p");
        empate.innerHTML ="Empatou";
        result.appendChild(empate);
    } else if (retornoAleatorio === "papel" ) {
        const empate = document.createElement("p");
        empate.innerHTML ="Você Ganhou";
        result.appendChild(empate);
    } else {
        const empate = document.createElement("p");
        empate.innerHTML ="Você Perdeu";
        result.appendChild(empate);
    }
})

buttonPapel.addEventListener('click',()=> {
    // escolha da máquina
    let choices = ['papel', 'tesoura', 'pedra']
    let tamanho_array = choices.length
    let nAleatorio = Math.floor(Math.random() * tamanho_array);
    let retornoAleatorio = choices[nAleatorio];
    const choiceUser = "papel";
    if (retornoAleatorio === choiceUser) {
        const empate = document.createElement("p");
        empate.innerHTML ="Empatou";
        result.appendChild(empate);
    } else if (retornoAleatorio === "pedra" ) {
        const empate = document.createElement("p");
        empate.innerHTML ="Você Ganhou";
        result.appendChild(empate);
    } else {
        const empate = document.createElement("p");
        empate.innerHTML ="Você Perdeu";
        result.appendChild(empate);
    }
})