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
    console.log(novaFrase)
    return novaFrase;
}

function descodificar() {
    var novaFrase = "";
    var i = 0;
    while (i < input.value.length) {

        if (input.value.indexOf("ai", i) == i) {
            novaFrase += "a";
            i += 2;
        } 
        else if (input.value.slice(i, i + 5) == "enter") {
            novaFrase += "e";
            i += 5;
        } 
        else if (input.value.slice(i, i + 4) == "imes") {
            novaFrase += "i";
            i += 4;
        }
        else if (input.value.slice(i, i + 4) == "ober") {
            novaFrase += "o";
            i += 4;
        }
        else if (input.value.slice(i, i + 4) == "ufat") {
            novaFrase += "u";
            i += 4;
        }
         else {
            novaFrase += input.value[i];
            i++;
        }
    }
    console.log(novaFrase)
    return novaFrase;

    
}

var input = document.querySelector("div#box_input input");

var buttonCodifica = document.querySelector("div#box_input button.btn_codificar");
buttonCodifica.onclick = codificar;
var buttonDescodifica = document.querySelector("div#box_input button.btn_descodificar");
buttonDescodifica.onclick = descodificar;
