let num = document.getElementById('txtnum')
let flista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) { //Vai receber um número
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //Vai receber um número e uma lista
    if (l.indexOf(Number(n)) != -1) { // -1 Indica que o valor não foi encontrado na lista
        return true 
    } else {
        return false
    }
}

function adicionar () {
    if (isNumero(num.value) && ! inLista(num.value, valores)) { // Valor dentro de num vai ser analisado para ver se é um número e só vai adicionar se não estiver dentro de lista valores
        valores.push(Number(num.value)) //Adicionar um elemento em um vetor
        let item = document.createElement('option') //Criando elemento de forma dinâmica
        item.text = `Valor ${num.value} adicionado.`
        flista.appendChild(item) //Adicionando na lista
        res.innerHTML = '' // Quando adicionar um valor ele limpa o resultado
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = '' // Para limpar campo ao adicionar
    num.focus() // Para o cursor do mouse voltar a piscar no campo de digitação 
}

function finalizar () {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // Para saber quantos elementos o vetor tem
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let posicao in valores) {
            soma += valores[posicao] // Começa com 0 e vai somando com os demais valores
            if (valores[posicao] > maior) // Verificando o maior número
                maior = valores[posicao]
            if (valores[posicao] < menor)  // Verificando o menor número
                menor = valores[posicao]
        }
        media = soma / tot
        res.innerHTML = '' // Vai zerar o valor
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</P>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        
    }
}