let listaDeNumerosSorteados=  [];
let numeroLimite = 10;
let numeroSecreto = parseInt(Math.random() * 10+1);
let tentativas = 1;


function exibirTextoNaTela(tag, Texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto ;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(Texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log('Web Speech API não suportada neste navegador.');
    };
}

exibirTextoNaTela('h1','jogo do número secreto');
exibirTextoNaTela('p', 'quantas mamadas o gui deu hj');


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (numeroSecreto == chute){
    exibirTextoNaTela('h1', 'acertou');
    let palavraTentativa = tentativas> 1 ? 'tentativas' : 'tentativa';
    let mensagensTentativas = `você descobriu com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p',mensagensTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto){ 
            exibirTextoNaTela('p', 'o número é menor');
        }else {
            exibirTextoNaTela('p', 'o número é maior');
        }
        tentativas++;
        limparCampo()
    }
    } 

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidaDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidaDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }
    else {  
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1','jogo do número secreto');
    exibirTextoNaTela('p', 'quantas mamadas o gui deu hj');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
