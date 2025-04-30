var radio = document.querySelector('.manual-btn')
var cont = 1;
document.getElementById('radio1').checked =true

setInterval(() =>{ //efeito animação 3 segundo cada imagem
    proximaImg()
}, 3500)


function proximaImg() {  // função que faz o slide voltar ao primeiro toda vez que chegar no ultimo
    cont++
    if (cont > 4) {
        cont = 1;
    }
    document.getElementById('radio'+cont).checked =true
}

