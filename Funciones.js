 function evalua() {
        var cadena = document.getElementById('cad1').value;
        var soloMinusculas = cadena !== cadena.toLowerCase();
        var soloMayusculas = cadena !== cadena.toUpperCase();

        var mensaje = '';

        if (soloMayusculas == soloMinusculas) {  
            mensaje = 'La cadena "' + cadena + '" contiene tanto mayúsculas como minúsculas.';
        } else if (soloMayusculas) {
            mensaje = 'La cadena "' + cadena+ '" contiene solo minúsculas.';
        } else if (soloMinusculas) {
            mensaje = 'La cadena "' +  cadena + '" contiene solo mayúsculas.';
        }

        document.getElementById('parrafo').innerText = mensaje;
    }