function encodeText() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3;  // Cifra de César com um deslocamento de 3
    let encodedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[a-z]/i)) {
            let code = inputText.charCodeAt(i);
            // Letras maiúsculas
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            // Letras minúsculas
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        encodedText += char;
    }

    document.getElementById('outputText').value = encodedText;
}

function decodeText() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3;  // Cifra de César com um deslocamento de 3
    let decodedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[a-z]/i)) {
            let code = inputText.charCodeAt(i);
            // Letras maiúsculas
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            }
            // Letras minúsculas
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
        }
        decodedText += char;
    }

    document.getElementById('outputText').value = decodedText;
}