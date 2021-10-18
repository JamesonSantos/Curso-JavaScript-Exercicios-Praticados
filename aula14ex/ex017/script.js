function gerartabuada () {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    let rad = document.getElementsByName('radop')
    let n = Number(num.value)
    if (num.value.length == 0) {
        alert('Insira um número!')
    } else if (rad[0].checked) {
        //Escolhido adição
        let cont = 1
        tab.innerHTML = '' //Para limpar no final
        while (cont <= 10) {
            let item = document.createElement('option')
            //Criando option como HTML
            item.text = `${n} + ${cont} = ${n+cont}` //Para mostrar na tela dentro do option
            tab.appendChild(item) //Adicionar um elemento filho
            cont++
        } 
    } else if (rad[1].checked) {
        //Escolhido bustração
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} - ${cont} = ${n-cont}`
            tab.appendChild(item)
            cont++
        }

    } else if (rad[2].checked) {
        //Escolhido multiplicação
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont++
        }

    } else if (rad[3].checked) {
        //Escolhido divisão
        let cont = 1
        tab.innerHTML = ''
        while (cont <=10) {
            let item = document.createElement('option')
            item.text = `${n} ÷ ${cont} = ${n/cont}`
            tab.appendChild(item)
            cont++
        }

    }

}
function limpar () {
    let tab = document.getElementById('seltab')
    tab.innerHTML = '<option>Digite um número acima</option>'
}