let num = [5, 8, 2, 9, 3]
num.sort() //Método interno dentro de um vetor que coloca em ordem 
num.push(1) //Vai colocar valor 1 no final
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) //Procura valor no vetor
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
