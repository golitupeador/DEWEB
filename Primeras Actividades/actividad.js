//Funcion para comprobar si eres mayor de edad
function compruebaEdad(){
    var edad=document.getElementById('edad').value;
    if(edad>18)
    {
        alert("Eres mayor de edad");
    }else
    {
        alert("Eres menor de edad");
    }
    
}

//Funcion para comprobar si la cadena esta vacia o no
function compruebaCadena(){
    var cadena=document.getElementById('cadena').value;
    if(cadena!=undefined && cadena!=null && cadena!="")
    {
        alert("La cadena no esta vacia");
        return true;
    }else
    {
        alert("La cadena esta vacia");
        return false;
    }
    
}

function compruebaPrimo()
{
    var numero = document.getElementById('numero').value;
    var primo = true;
    if (numero >= 2) {
        //Si es 2 o 3 es primo
        if(numero == 2 || numero == 3){
            primo = true;
        }
        //Si es divisor de dos, no es primo
        else if (numero % 2 == 0) {
            primo = false;
        }
        else {
            //Comprobamos para los impares si es primo
            for (i = 3; i <= Math.floor(Math.sqrt(numero)); i += 2) {
                if (numero % i == 0) {
                    primo = false;
                    break;
                }
            }
        }
    }
    else 
    {
        primo = false;
    }

    if(primo==true)
    {
        alert("El numero"+numero+" es primo");
    }else
    {
        alert("El numero"+numero+" no es primo");
    }
}

function compruebaDivisores()
{
    var numero = document.getElementById('numero').value;
    var divisores = [];
    
        for (i = 1; i <=numero; i++) 
        {
            //Siel resto es 0, lo metemos en el array
            if (numero % i == 0) 
            {
                divisores.push(i);
            }
        }
    //Guardamos el array en el to string para mostrarlo en el alert todos los elementos
    var texto=divisores.toString();
    alert(texto);
}

function compruebaDNI()
{
    var dni = document.getElementById('dni').value;
    var letr;
    var letra;
    
    //Creamos una variable que vaya a comprobar la estructura de un DNI para validarlo, 8 numeros seguido de una letra, el dolar hace que haya una letra al final de los numeros
    var expresion_regular_dni;
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    
    //Comprobamos que la expresion tiene un formato valido, con test comprobamos que el dni tiene la expresion regular que hemos especificaodo anteriormente
    if(expresion_regular_dni.test (dni) == true)
    {
        //Guardamos en el numero los 8 primeros caracteres u en la letra la ultima
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        //Para averiguar la posicion de la letra le hacemos el modulo
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        //Comprobamos que la letra es la adecuada
        letra=letra.substring(numero,numero+1);

        //Si la letra es distinta de la letra guardada del DNI introducido
        if (letra!=letr.toUpperCase()) 
        {
            alert('El Dni ' +dni+' es erroneo, la letra del NIF no se corresponde');
        }else
        {
            alert('El Dni '+dni+' es correcto');
        }
    }else
    {
        alert('El Dni '+dni+' es erroneo, formato no válido');
    }
}


