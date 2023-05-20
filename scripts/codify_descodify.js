function addSubmitCont() {
    submitCont.style.display = "";
    submitVazio.style.display = "none";
    submitCont.style.opacity = "0";

    setTimeout(function () {
        submitCont.style.opacity = "1";
        submitCont.style.transition = "opacity 1s"; 
    }, 10);
}

function verificaTextArea() {
    
    if (textarea.value == "") {
        if (exibe_texto && exibe_texto.style.display == "") {
           submitCont.style.display="none";
        }
        submitVazio.style.display=""; 
    }
   
    else if (textarea.value){
        if (exibe_texto){
            submitCont.style.display = "none";
        }
        
       
        
       
        submitVazio.style.display="";
    }
   
    
}

function exibe(frase) {
    
    if (exibe_texto) {
        exibe_texto.textContent = frase;
    }
}

function codificar() {
    if (exibe_texto && textarea.value){
        submitVazio.style.display="none";
        addSubmitCont();
        exibe_texto.style.display = ""
        let caracteres = textarea.value.split("");
        let novaFrase = ""

        for (let i = 0; i < caracteres.length; i++) {

            if (caracteres[i] == 'a') {
                novaFrase += "ai";
            }
            else if (caracteres[i] == 'e') {
                novaFrase += "enter";
            }
            else if (caracteres[i] == 'i') {
                novaFrase += "imes";
            }
            else if (caracteres[i] == 'o') {
                novaFrase += "ober";
            }
            else if (caracteres[i] == 'u') {
                novaFrase += "ufat";
            }
            else {
                novaFrase += caracteres[i];
            }



        }

        exibe(novaFrase);
        textarea.value = '';
    }
    else{
        submitVazio.classList.add("tremer");
        setTimeout(function () {
            submitVazio.classList.remove("tremer");
        }, 1000);
    }
    
   
}

function descodificar() {
    if (exibe_texto && textarea.value) {
        submitVazio.style.display="none";
        addSubmitCont();
        exibe_texto.style.display = "";
        let novaFrase = textarea.value.replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        exibe(novaFrase);
        textarea.value = '';
    }
    else {
        submitVazio.classList.add("tremer");
        setTimeout(function () {
            submitVazio.classList.remove("tremer");
        }, 1000);
    }
    
   
}

function copiar() {

    texto=exibe_texto.textContent
    navigator.clipboard.writeText(texto)
    bntCopiar.innerHTML = "COPIADO!";
    bntCopiar.style.animation = "none";
    
    setTimeout(function () {
        bntCopiar.innerHTML = "Copiar";
        bntCopiar.style.animation = "";
    }, 2000);
    
}


// adiciona uma seta para descer a pag
const arrow = document.querySelector('.scroll-to-bottom');
arrow.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});


const textarea = document.querySelector("section.input textarea");
const submitVazio = document.querySelector("section.submit-vazio");
const submitCont = document.querySelector("section.submit-conteudo");
const bntCopiar = document.querySelector("section.submit-conteudo button");
let exibe_texto = document.querySelector("section.submit-conteudo .exibe-texto");

submitCont.style.display = "none";//não aparece o campo que exibe o texto

textarea.addEventListener("input", function () {
    verificaTextArea();
});

