class heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let tipoAtaque
        if(this.tipo === "mago"){
            tipoAtaque = "magia"
        }
        else if (this.tipo === "guerreiro"){
            tipoAtaque = "espada"
        }
        else if (this.tipo === "monge"){
            tipoAtaque = "artes marciais"
        }
        else if (this.tipo === "ninja"){
            tipoAtaque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`)
    }
}
let heroina = new heroi("Lucas", 30 , "1")
heroina.atacar()