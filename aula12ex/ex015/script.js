function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // Puxa div do HTML
    var res = document.getElementById('res') // Puxa div do HTML
    if (fano.value.length == 0 || Number(fano.value) > ano) { // Verifica se o usuário deixou a caixa em branco e se o ano informado é maior do que o ano atual
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // Puxa objeto pelo nome do HTML o sexo do usuário
        var idade = ano - Number(fano.value) // Calculando a idade do usuário
        var genero = '' // Começa com uma string vazia, pois ainda não foi informado pelo usuário
        var img = document.createElement('img') // Criando tag img
        img.setAttribute('id', 'foto') // Atribuindo id para foto como se fosse no HTML:   <img id='foto'>
        if (fsex[0].checked) { // Verificando se o sexo da pessoa foi seliconado como masculino ou feminino. No caso na posição [0] que é masculino
           genero = 'Homem'
           document.body.style.background = 'blue' // Muda a cor do body para azul se for masculino
           if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png') // Como se fosse no HTML:   <img src='foto-bebe-m.png'>
           } else if (idade < 21) {
               //Jovem
               img.setAttribute('src', 'foto-jovem-m.png')
           } else if (idade < 60) {
               //Adulto
               img.setAttribute('src', 'foto-adulto-m.png')
           } else {
               //Idoso
               img.setAttribute('src', 'foto-idoso-m.png')
           }
        } else if (fsex[1].checked) { // Verificando se o sexo da pessoa foi seliconado como masculino ou feminino. No caso na posição [1] que é feminino
            genero = 'Mulher'
            document.body.style.background = 'pink' // Muda a cor do body para rosa se for feminino 
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
           } else if (idade < 21) {
               //Jovem
               img.setAttribute('src', 'foto-jovem-f.png')
           } else if (idade < 60) {
               //Adulto
               img.setAttribute('src', 'foto-adulto-f.png')
           } else {
               //Idoso
               img.setAttribute('src', 'foto-idoso-f.png')
           }
        }
        res.style.textAlign = 'center' // Centralizando em JavaScript a res do HTML
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // Puxa a div res do HTML 
        res.appendChild(img) // Adicionando elemento embaixo que no caso é o img, a imagem.
    }

}