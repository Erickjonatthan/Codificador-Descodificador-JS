function verificaPlanoFundo(){
    if (elementoImagem) {
        elementoCopiar.remove()
    }
}

function addElementoCopiar() {
    const boxSubmit = document.querySelector("div.box_submit");
    const elementoImagem = document.querySelector("div.box_submit .planoFundo");

    function isElementEmpty(element) {
        return element == null || !element.hasChildNodes();
    }

    const copyButton = document.querySelector("div.box_submit .btn_copiar") ||
        (() => {
            const button = document.createElement("button");
            const buttonText = "Copiar";
            button.classList.add("btn_copiar");
            button.textContent = buttonText;
            button.onclick = copiar;
            boxSubmit.appendChild(button);
            return button;
        })();

    if (!isElementEmpty(elementoImagem)) {
        copyButton.remove();
    }
}

function exibe(frase) {
    const elementoTexto = document.querySelector("div.box_submit .exibe_texto");

    if (elementoImagem && textarea.value) {
        elementoImagem.remove();

    }
    elementoTexto.textContent = frase;
}


function codificar() {
    var caracteres = textarea.value.split("");
    var novaFrase = ""

    for (var i = 0; i < caracteres.length; i++) {

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

    exibe(novaFrase)
    addElementoCopiar();
}
function descodificar() {

    

    
    var novaFrase = textarea.value.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    exibe(novaFrase)
    addElementoCopiar();
}
function copiar() {
    let exibe_texto = document.querySelector('div.box_submit .exibe_texto');
    let texto = exibe_texto.textContent;
    navigator.clipboard.writeText(texto);

}

const textarea = document.querySelector("div.box_input textarea");
const buttonCodifica = document.querySelector("div.box_input button.btn_codificar");
const buttonDescodifica = document.querySelector("div.box_input button.btn_descodificar");
const elementoCopiar = document.querySelector("div.box_submit .btn_copiar");
const elementoImagem = document.querySelector("div.box_submit .planoFundo");
const arrow = document.querySelector('.scroll-to-bottom');

arrow.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// antes de tudo deve verifcar se o plano de fundo está presente 
verificaPlanoFundo();

// desabilita o botao caso não tenha valor dentro do textarea
textarea.addEventListener("textarea", function () {
    buttonCodifica.disabled = textarea.value.trim() === "";
    buttonDescodifica.disabled = textarea.value.trim() === "";
});


