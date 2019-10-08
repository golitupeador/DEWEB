function numeroPositivo()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /(^| )\d+( |$|\. )/
    
}

function numeroDecimal()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /\d.\d+/
    
}

function documento()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /^((\w| )+\.)+(doc|docx)$/
    
}

function imagen()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /^((\w| )+\.)+(jpg|png|gif)$/
    
}

function hexadecimal()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /[0-9A-Z]+/
    
}

function nombreCompleto()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /[^][A-ZÁÉÍÓÚÑ][a-záéíóúñ]+[A-ZÁÉÍÓÚÑ]|[a-záéíóúñ]+\ [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/
    
}

function vacio()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /^\w/
    
}

function cadenaMayusc()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /^[^a-z]*$/
    
}

function dni()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /^\d{8}[a-zA-Z]$/
    
}

function numeroTelefono()
{
    var expresionRegular;
    var cadena = document.getElementById('numPositivo').value;
    expresionRegular = /^(0034|\+34)?[67]\d{8}$/
    
}

function mac()
{
    var expresionRegular;
    var cadena = document.getElementById('mac').value;
    expresionRegular = /^\d{2}\.\d{2}\.\d{2}\.\d{2}$/
    
}

function matricula()
{
    var expresionRegular;
    var cadena = document.getElementById('matricula').value;
    expresionRegular = /^\d{6}|\d{4}\-[A-Z](?!Q|Ñ|A|E|I|O|U){3}|[A-Z](?!Q|Ñ|A|E|I|O|U){2}\-\d{4}\-[A-Z](?!Q|Ñ|A|E|I|O|U){3}$/
}

function codigoPostal()
{
    var expresionRegular;
    var cadena = document.getElementById('matricula').value;
    expresionRegular = /^([1234][1-9]|[5][1-2])\d{3}$/
}

function email()
{
    var expresionRegular;
    var cadena = document.getElementById('matricula').value;
    expresionRegular = /^/
}