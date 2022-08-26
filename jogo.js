
var altura = 0
var largura = 0
/*Faz um ajuste de acordo com o tamanho da tela*/
function ajustaTamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalco()

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random()*largura)-90
    var posicaoY = Math.floor(Math.random()*altura)-90

    posicaoX = posicaoX < 0 ? 0:posicaoX
    posicaoY = posicaoY < 0 ? 0:posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className =tamanhoAleatorio()/*tamanho aleatorio do mosquito*/
    mosquito.style.left = posicaoX +'px'
    mosquito.style.top = posicaoY +'px'
    mosquito.style.position ='absolute'


    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()* 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
