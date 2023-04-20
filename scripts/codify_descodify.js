function addExibeTexto() {
    elementoImagem.remove();
    exibe_texto.classList.add("exibe_texto"); // adiciona a classe
    boxSubmit.appendChild(exibe_texto);
    boxSubmit.appendChild(elementoCopiar);
}

function addPlanoFundo() {
   
    if (exibe_texto) {
        exibe_texto.remove();
        elementoCopiar.remove();
    }
    boxSubmit.appendChild(elementoImagem); // adicionando ao div box_submit
}

function verificaTextArea() {
    
    if (textarea.value == "") {
        if (exibe_texto && exibe_texto.style.display == "") {
            exibe_texto.remove();
            elementoCopiar.remove();
        }
        boxSubmit.appendChild(elementoImagem); // adicionando ao div box_submit
    }
   
    else if (textarea.value){
        if (exibe_texto){
            exibe_texto.remove();
        }
        
       
        elementoCopiar.remove();
       
        boxSubmit.appendChild(elementoImagem);
    }
   
    
}

function exibe(frase) {
    
    if (exibe_texto) {
        exibe_texto.textContent = frase;
        boxSubmit.appendChild(elementoCopiar);
    }
}

function codificar() {
    if (exibe_texto && textarea.value){
        elementoImagem.remove();
        addExibeTexto();
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
    
   
}

function descodificar() {
    if (exibe_texto && textarea.value) {
        elementoImagem.remove();
        addExibeTexto();
        exibe_texto.style.display = "";
        let novaFrase = textarea.value.replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        exibe(novaFrase);
        textarea.value = '';
    }
    
   
}

function copiar() {
    texto=exibe_texto.textContent
    navigator.clipboard.writeText(texto)
   
    
}

const textarea = document.querySelector("div.box_input textarea");
const buttonCodifica = document.querySelector("div.box_input button.btn_codificar");
const buttonDescodifica = document.querySelector("div.box_input button.btn_descodificar");
const elementoCopiar = document.querySelector("div.box_submit .btn_copiar");
const elementoImagem = document.querySelector("div.box_submit .planoFundo");
let exibe_texto = document.querySelector('div.box_submit .exibe_texto');
const boxSubmit = document.querySelector("div.box_submit");
// antes de tudo deve verifcar se o plano de fundo está presente 
exibe_texto.style.display = "none";

textarea.addEventListener("input", function () {
    verificaTextArea();
});

