function addElementoCopiar() {
    var boxSubmit = document.querySelector("div.box_submit");

    // Verifica se o botão "Copiar" já existe no DOM
    if (!document.querySelector("div.box_submit .btn_copiar")) {
        var btnCopiar = document.createElement("button");
        btnCopiar.classList.add("btn_copiar");
        btnCopiar.textContent = "Copiar";
        btnCopiar.onclick = copiar;
        boxSubmit.appendChild(btnCopiar);
    }
}

function exibe(frase){

    var elementoTexto = document.querySelector("div.box_submit .exibe_texto");

    
    if (elementoImagem && input.value) {
        elementoImagem.remove();
       
    }
 
    elementoTexto.textContent = frase;
   
}

function copiar() {
    let exibe_texto = document.querySelector('div.box_submit .exibe_texto');
    let texto = exibe_texto.textContent;

    navigator.clipboard.writeText(texto);

    
}


function codificar(){
    addElementoCopiar();
    var input = document.querySelector("div.box_input input");
    var caracteres = input.value.split("");
    var novaFrase = ""

    for (var i = 0; i < caracteres.length; i++) {

        if (caracteres[i] == 'a') {
            novaFrase += "ai";
        }
        else if (caracteres[i] =='e') {
            novaFrase += "enter";
        }
        else if (caracteres[i] == 'i') {
            novaFrase += "imes";
        }
        else if (caracteres[i] == 'o') {
            novaFrase += "ober";
        }
        else if (caracteres[i] =='u') {
            novaFrase += "ufat";
        }
        else {
            novaFrase += caracteres[i];
        }



    }
    
    exibe(novaFrase)
    
}
function descodificar() {
    addElementoCopiar();
    var novaFrase = input.value.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    exibe(novaFrase)
   
}


var input = document.querySelector("div.box_input input");
var buttonCodifica = document.querySelector("div.box_input button.btn_codificar");
var buttonDescodifica = document.querySelector("div.box_input button.btn_descodificar");
var elementoCopiar = document.querySelector("div.box_submit .btn_copiar");
var elementoImagem = document.querySelector("div.box_submit .planoFundo");
if(elementoImagem){
    elementoCopiar.remove()
}
input.addEventListener("input", function () {
    buttonCodifica.disabled = input.value.trim() === "";
    buttonDescodifica.disabled = input.value.trim() === "";
});
