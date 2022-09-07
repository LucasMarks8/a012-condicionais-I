// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um if para cada variável, checando as seguintes afirmacões:

// Se a pessoa tem 18 anos ou mais;
// Se a pessoa terminou o ensino médio;
// Se a pessoa NÃO está cursando alguma faculdade;
// Crie um if que imprima que a afirmacão é verdadeira, e um else para imprimir que a afirmacão não é verdadeira.

// Exemplo
// Caso a primeira pessoa tenha idade >=18:

// "A pessoa é maior de idade"

// e caso não seja:

// "A pessoa é menor de idade"
let idade = prompt("Qual é a sua idade?")
let isMaiorIdade = prompt("Você já concluiu o ensino médio? Se sim, digite S e se não, digite N")
let isCursandoOutraFaculdade = prompt("Voc^está cursando faculdade? Se sim, digite S e se não, digite N")

if(idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}
	
if(isMaiorIdade === "S"){
    console.log("Você concluiu o ensino médio, parabéns!")
}else{
    console.log("Você não concluiu o ensino médio")
}

if(isCursandoOutraFaculdade === "S"){
    console.log("Você está cursando faculdade")
}else{
    console.log("Você não está cursando faculdade")
}
