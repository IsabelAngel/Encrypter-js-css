

document.getElementById("encriptar").addEventListener("click", function(e){
    e.preventDefault()
    encriptar()
})

document.getElementById("desencriptar").addEventListener("click", function(e){
    e.preventDefault()
    desencriptar()
})

document.getElementById("copiar").addEventListener("click", function(e){
    e.preventDefault()
    copiar()
})

const ALFABETO = "abcdefghijklmnopqrstuvwxyz";

function encriptar() {
    let entradaTexto = document.getElementById("texto").value
    var claveEncriptar = "elefante"
    let salidaCifrada = "";

    let j = 0;
    for (let i = 0; i < entradaTexto.length; i++) { 
    
        const caracterEntrada = entradaTexto[i];
        const caracterEntradaPosicion = ALFABETO.indexOf(caracterEntrada);

        if (caracterEntradaPosicion === -1) {
            salidaCifrada += caracterEntrada;
            continue;
        }

        const claveEncriptarCharacter = claveEncriptar[j];
        const claveEncriptarCharacterIndex = ALFABETO.indexOf(claveEncriptarCharacter);
        const sumaIndices = caracterEntradaPosicion + claveEncriptarCharacterIndex;
        const indiceCaracterCifrado = sumaIndices % 26;
        const caracterSalidaCifrado = ALFABETO[indiceCaracterCifrado];
        console.log(`${entradaTexto[i]}(${caracterEntradaPosicion}) + ${claveEncriptar[j]}(${claveEncriptarCharacterIndex}) = ${caracterEntradaPosicion + claveEncriptarCharacterIndex} % 26 = ${indiceCaracterCifrado} => ${caracterSalidaCifrado}`);

        j = j === claveEncriptar.length - 1 ? 0 : j + 1;

        salidaCifrada += caracterSalidaCifrado;
    }
    labels = document.getElementById('Texto_encriptado').innerHTML = salidaCifrada;
}

function desencriptar() {
    var clave = "elefante"
    //let salidaCifrada = document.getElementById('Texto_encriptado').textContent
    let salidaCifrada = document.getElementById("texto").value
    let entradaTexto = "";

    let j = 0;
    for (let i = 0; i < salidaCifrada.length; i++) {
        const caracterSalidaCifrado = salidaCifrada[i]; 
        const caracterSalidaCifradoIndex = ALFABETO.indexOf(caracterSalidaCifrado); 
        
        if (caracterSalidaCifradoIndex === -1) { 
            entradaTexto += caracterSalidaCifrado;  
            continue;
        }
        
        const caracterClave = clave[j];
        const claveCaracterCifrado = ALFABETO.indexOf(caracterClave);

        const sumaIndices = caracterSalidaCifradoIndex - claveCaracterCifrado + 26;

        const indiceCaracterCifrado = sumaIndices % 26;
        const caracterCifrado = ALFABETO[indiceCaracterCifrado];
        j = j === clave.length - 1 ? 0 : j + 1;
        entradaTexto += caracterCifrado;
    }
    labels = document.getElementById('Texto_encriptado').innerHTML = entradaTexto;
}

function copiar() {
    var textoCopiado = document.getElementById("Texto_encriptado").textContent;
    navigator.clipboard.writeText(textoCopiado);
    alert("Se copió al portapapeles: " + textoCopiado);
}