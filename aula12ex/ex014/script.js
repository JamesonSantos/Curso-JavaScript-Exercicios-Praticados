function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (minuto < 10) {
        minuto = '0'+minuto
    }
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'foto-manhã.png'
        document.body.style.background ='#FEE1B9'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'foto-tarde.png'
        document.body.style.background ='#c17d50'
    } else {
        // BOA NOITE!
        img.src = 'foto-noite.png'
        document.body.style.background = '#042023'
    }  
}
