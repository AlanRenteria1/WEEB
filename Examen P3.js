function palindromo() {
    var cadena = document.getElementById('cadena').value;
    var resultado = "La frase \""+cadena+"\"";
    var cadenaOriginal = cadena.toLowerCase().replace(/[\W_]/g, '');
    var cadenaReves = cadenaOriginal.split('').reverse().join('');
    resultado += (cadenaOriginal === cadenaReves) ? " es un palíndromo" : " no es un palíndromo";
    document.getElementById('resultado').innerText = resultado;
}