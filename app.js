function criptografar() {

    let input = document.getElementById("entradaTexto").value;

    if (!validaTexto(input)) {
        alert("O texto não pode conter letras maiúsculas ou acentos.");
        return;
    }
    
    let encryptedText = input.replaceAll('e', 'enter')
                              .replaceAll('i', 'imes')
                              .replaceAll('a', 'ai')
                              .replaceAll('o', 'ober')
                              .replaceAll('u', 'ufat');
    document.getElementById("saidaTexto").innerText = encryptedText;    
}

function descriptografar() {

    let input = document.getElementById("entradaTexto").value;

    if (!validaTexto(input)) {
        alert("O texto não pode conter letras maiúsculas ou acentos.");
        return;
    }
   
    let decryptedText = input.replaceAll('enter', 'e')
                              .replaceAll('imes', 'i')
                              .replaceAll('ai', 'a')
                              .replaceAll('ober', 'o')
                              .replaceAll('ufat', 'u');
    document.getElementById("saidaTexto").innerText = decryptedText;
}

function copiaTexto() {
    // Lógica para copiar o texto da área de transferência
    let outputText = document.getElementById("saidaTexto");
    let range = document.createRange();
    range.selectNode(outputText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
    //Limpa o campo de saída 
    outputText.innerText = "";
    alert("Texto copiado com sucesso!");
}

function validaTexto(text) {
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);

        // Verifica se é letra maiúscula (A-Z: códigos Unicode 65 a 90)
        if (charCode >= 65 && charCode <= 90) {
            return false;
        }

        // Verifica se é um caractere acentuado ou especial
        if ((charCode >= 192 && charCode <= 687) || 
            (charCode >= 768 && charCode <= 879) || 
            (charCode >= 880 && charCode <= 1023) ||
            charCode === 231 || charCode === 209 || charCode === 199 || charCode === 241) {
            return false;
        }
    }
    return true;
}

