let amigo = {nome:'Jose',
sexo:'M',
peso:85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p // this é uma palavra autoreferência a um objeto
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)