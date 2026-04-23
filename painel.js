import VooSeguro from './voo.js';


const inputCodigo = document.getElementById("inputCodigo");
const inputOrigem = document.getElementById("inputOrigem");
const inputDestino = document.getElementById("inputDestino");
const btnRegistrar = document.getElementById("btnRegistrar");
const mensagemTela = document.getElementById("avisoSistema");


const tituloVoo = document.getElementById("tituloVoo");
const textoPainel = document.getElementById("painelCombustivel");
const botaoGastar = document.getElementById("btnGastar");
const botaoAbastecer = document.getElementById("btnAbastecerSeguro");

let meuVoo;

function atualizarTela() {
    if (meuVoo) {
        textoPainel.innerText = meuVoo.lerCombustivel; 
    }
}


btnRegistrar.addEventListener("click", function() {
    let codigoDigitado = inputCodigo.value;
    let origemDigitada = inputOrigem.value;
    let destinoDigitado = inputDestino.value;

    
    try {
        console.log("Iniciando registro do voo...");
        
      
        meuVoo = new VooSeguro(codigoDigitado, origemDigitada, destinoDigitado);
        
     
        mensagemTela.innerText = "Voo cadastrado com sucesso!";
        mensagemTela.style.color = "green";

       
        tituloVoo.innerText = `Abastecimento do Voo ${codigoDigitado}`;
        atualizarTela();
        botaoGastar.disabled = false;
        botaoAbastecer.disabled = false;

    } 
   
    catch (erro) {
        console.error("Ops, algo deu errado. A equipe de resgate foi acionada.");
        
        mensagemTela.innerText = erro.message; 
        mensagemTela.style.color = "red";
        
   
        meuVoo = undefined;
        tituloVoo.innerText = "Voo não registrado";
        textoPainel.innerText = "O tanque está em 0%";
        botaoGastar.disabled = true;
        botaoAbastecer.disabled = true;
    } 
    
    finally {
        console.log("Tentativa de registro finalizada no sistema.");
    }
});


botaoGastar.addEventListener("click", function() {
    if (meuVoo) {
        meuVoo.gastar = 10; 
        atualizarTela();
    }
});

botaoAbastecer.addEventListener("click", function() {
    if (meuVoo) {
        meuVoo.abastecer = 10; 
        atualizarTela();
    }
});
