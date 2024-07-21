document.getElementById('encriptar').addEventListener('click', encrypt);
document.getElementById('desencriptar').addEventListener('click', decrypt);
document.getElementById('copiado').addEventListener('click', copyToClipboard);
document.getElementById('limpiar').addEventListener('click', clearText);

function encrypt() {
    const input = document.getElementById('ingresa_texto').value.trim();
    
    if (!isValidInput(input)) {
        alert("Por favor, usa solo minúsculas sin acentos ni caracteres especiales, tampoco ñ.");
        return;
    }

    let encrypted = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    displayResult(encrypted);
}

function decrypt() {
    const input = document.getElementById('ingresa_texto').value.trim();
    
    if (!isValidInput(input, true)) {
        alert("Por favor, usa solo minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let decrypted = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    displayResult(decrypted);
}

function isValidInput(input, isDecryption = false) {
    const regex = /^[a-z\s]*$/; // Acepta letras minúsculas y espacios
    return regex.test(input) || (isDecryption && /^[a-z\senterimesaifoberufat]*$/.test(input));
}

function displayResult(result) {
    const messageElement = document.getElementById('mensaje_salida');
    const imageElement = document.querySelector('.imagen');

    messageElement.textContent = result ? result : "Ningún texto fue encontrado";
    
    if (result) {
        imageElement.style.display = 'none'; // Ocultar la imagen
    } else {
        imageElement.style.display = 'block'; // Mostrar la imagen si no hay resultado
    }
}

function copyToClipboard() {
    const messageElement = document.getElementById('mensaje_salida');
    const textToCopy = messageElement.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

function clearText() {
    document.getElementById('ingresa_texto').value = ''; // Limpiar el textarea
    document.getElementById('mensaje_salida').textContent = "Ningún texto fue encontrado"; // Resetear mensaje
    document.querySelector('.imagen').style.display = 'block'; // Mostrar la imagen
}

