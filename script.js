function caesarEncrypt(text, shift) {
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charCode = text.charCodeAt(i);

        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            let shiftedCharCode = charCode + shift;

            if (char >= 'a' && char <= 'z' && shiftedCharCode > 122) {
                shiftedCharCode -= 26;
            } else if (char >= 'A' && char <= 'Z' && shiftedCharCode > 90) {
                shiftedCharCode -= 26;
            }

            encryptedText += String.fromCharCode(shiftedCharCode);
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, -shift);
}

document.getElementById('encryptBtn').onclick = e => {
    const plainText = document.getElementById('plainText').value
    const stepValue = document.getElementById('stepValue').value
    const encryptedTextInput = document.getElementById('encryptedText')
    const encryptedText = caesarEncrypt(plainText, parseInt(stepValue));
    encryptedTextInput.value = encryptedText
}

document.getElementById('decryptBtn').onclick = e => {
    const encryptedTextInput = document.getElementById('encryptedText').value
    const stepValue = document.getElementById('stepValue').value
    const plainText = document.getElementById('plainText')
    const encryptedText = caesarDecrypt(encryptedTextInput, parseInt(stepValue));
    plainText.value = encryptedText
}
