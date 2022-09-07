// let nacionalidade //= adicione o prompt aqui

// # Exercício 3

// Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, 
// imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

// const nacionalidade = prompt("Escreva aqui sua nacionalidade")

// if(nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade === "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana"){
//     console.log(nacionalidade.toUpperCase())
// }else{
//     console.log("Nacionalidade não encontrada")
// }

const nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

const nac = {
    nac1: "brasileira",
    nac2: "argentina",
    nac3: "uruguaia",
    nac4: "chilena",
    nac5: "colombiana",
  }
    
if(nacionalidade === nac.nac1){
    console.log(nac.nac1)
}else if(nacionalidade === nac.nac2){
    console.log(nac.nac2)
}else if(nacionalidade === nac.nac3){
    console.log(nnac.nac3)
}else if(nacionalidade === nac.nac3){
    console.log(nac.nac4)
}else if(nacionalidade === nac.nac5){
    console.log(nac.nac5)
}else{
    console.log(`${nacionalidade} "Nacionalidade não encontrada"`)
}  