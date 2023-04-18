function exibe(frase){

    var elementoTexto = document.querySelector("div.box_submit .exibe_texto");
    var elementoImagem = document.querySelector("div.box_submit .planoFundo");
    if (elementoImagem && input.value) {
        elementoImagem.remove();
    }
  
    elementoTexto.textContent = frase;
   
}

function codificar(){
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
    var novaFrase = input.value.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    exibe(novaFrase)
   
}


var input = document.querySelector("div.box_input input");
var buttonCodifica = document.querySelector("div.box_input button.btn_codificar");
buttonCodifica.onclick = codificar;
var buttonDescodifica = document.querySelector("div.box_input button.btn_descodificar");
buttonDescodifica.onclick = descodificar;