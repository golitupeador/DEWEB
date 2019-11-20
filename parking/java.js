/* ---------------------------------------- VARIABLES GLOBALES ---------------------------------------- */

var parking = null; // Variable global de parking
var caja = null;

/* ---------------------------------------- FUNCIONES DE OBJETOS ---------------------------------------- */

function anadirMatriculasRobadas()
{
    var arrayMatriculas=["1234-WWW","1234-ZZZ"];
    var myJSONMatriculas = JSON.stringify(arrayMatriculas);
    localStorage.setItem("matriculaRobada", myJSONMatriculas);
}

function introducirPlazasStorage(parking)
{
    var plazasOcupadas = JSON.parse(localStorage.getItem("plazaOcupada"));
    
    if (plazasOcupadas!=undefined || plazasOcupadas!=null)
    {
        plazasOcupadas.forEach(plaza => {
            parking.crearPlaza(plaza["matricula"]);
            parking.getPlaza(plaza["matricula"]).horaEntrada=new Date(plaza["horaEntrada"]);
        });

        pintarPlazas();
    }
}

function guardarTabla()
{
    localStorage.removeItem("plazaOcupada");

    var myJSONPlazas = JSON.stringify(parking.plazasOcupadas);

    localStorage.setItem("plazaOcupada", myJSONPlazas);
}


function guardarDineroCaja(plaza)
{
    caja.dineroRecaudado=+plaza.precioTotal(); 

    localStorage.removeItem("caja");

    var myJSONPlazas = JSON.stringify(caja.dineroRecaudado);

    localStorage.setItem("caja", myJSONPlazas);
}

function introducirDineroCajaLocalStorage()
{
    var cajaFuerte = JSON.parse(localStorage.getItem("caja"));
    
    if (caja!=undefined || caja!=null)
    {
        caja.dineroRecaudado=cajaFuerte;
    }
}

/* ---------------------------------------- VALIDACIONES ---------------------------------------- */

function comprobarMatricula(matricula)
{
    //Primero comprobaremos que el patron es el adecuado

    //Usaremos estas variables para comprobar el patron de las matriclas
    var expresionRegular;
    var resultado=true;
    
    expresionRegular = /^\d{6}|\d{4}\-[A-Z](?!Q|Ñ|A|E|I|O|U){3}|[A-Z](?!Q|Ñ|A|E|I|O|U){2}\-\d{4}\-[A-Z](?!Q|Ñ|A|E|I|O|U){3}$/
    //Comrpobamos que la expresion regular este bien
    if(expresionRegular.test (matricula) == true)
    {
        if(parking.comprobarPolicia(matricula)) //Comprobamos que no este en nuestra base de datos de la polce(en la entidad
        {
            resultado=true;
        }else
        {
            alert("LLamando a la polise");
            resultado=false;
        }
    }
    else
    {
        alert("Patron no correcto");
        resultado=false;
    }
    return resultado;
}

/* ---------------------------------------- FUNCIONES DE PINTADO ---------------------------------------- */

function pintarPlazas()
{
    var tbody = document.getElementById("tabla").children[1];
    tbody.innerHTML = "";

    parking.plazasOcupadas.forEach(plaza => {
        pintarFila(plaza);
    });
}

function pintarTicket(plaza)
{
    var cajaTicket=document.getElementById("ticket");
    var tickets=document.createElement("div");
    tickets.setAttribute("class", "tickets");
    cajaTicket.appendChild(tickets);
    var p=document.createElement("p");
    tickets.appendChild(p);

    p.innerHTML="Matricula"+plaza.matricula; 
    p.innerHTML+="</br>"
    
    p.innerHTML+=plaza.horaEntrada.toLocaleDateString()+" "+plaza.horaEntrada.toLocaleTimeString();
    p.innerHTML+="</br>"

    var horaSalida=new Date(); 
    horaSalida=horaSalida.toLocaleDateString()+" "+horaSalida.toLocaleTimeString();
    p.innerHTML+=horaSalida; 
    p.innerHTML+="</br>"
 
    p.innerHTML+="Precio: "+plaza.precioTotal(); 
    p.innerHTML+="</br>";

    setTimeout(function(){ tickets.remove() }, 10000);
}


/**
 * Metodo para crear lo necesario para pintar en la tabla los datos que necesitamos, cogiendolos de la entidad
 * @param {*} plaza 
 */
function pintarFila(plaza)
{
    var tabla= document.getElementById("tabla"); //Cogemos la tabla
    var tr=document.createElement("tr"); //Creamos un tr
    tabla.children[1].appendChild(tr); //Le introducimos al tbody el tr

    var matricula=document.createElement("td"); //Creamos un td
    matricula.innerHTML=plaza.matricula; //Cogemos la matricula del parking que acabamos de introducr
    tr.appendChild(matricula); //Se lo metemos al tr, esto se tiene que hacer en orden


    var horaEntrada=document.createElement("td"); //Creamos un td
    horaEntrada.innerHTML=plaza.horaEntrada.toLocaleDateString()+" "+plaza.horaEntrada.toLocaleTimeString(); //Cogemos del formulario el dni
    tr.appendChild(horaEntrada); //Se lo metemos al tr, esto se tiene que hacer en orden

    var precioTotal=document.createElement("td"); //Creamos un td
    precioTotal.innerHTML=plaza.precioTotal()+"€"; //Cogemos del formulario el dni
    tr.appendChild(precioTotal); //Se lo metemos al tr, esto se tiene que hacer en orden
}

/* ---------------------------------------- DOCUMENT READY ---------------------------------------- */

window.addEventListener("load",function()
{
    parking=new Parking();
    caja=new Caja();
    introducirDineroCajaLocalStorage();
    anadirMatriculasRobadas();  //Metemos las matriculas robadas en el localstorage

    //Guardamos los dos inputs en variables y le ponemos el focus a la primera
    var inputIngresar=document.getElementById("ingresarMatricula");
    var inputSacar=document.getElementById("sacarMatricula");
    inputIngresar.focus();  

    //Metemos las plazas del localStorage en la tabla
    introducirPlazasStorage(parking);
    
    window.addEventListener("keydown", function(event)
    {
        //Cuando hacemos cun control+E, el focus sera en el primer input
        if(event.code=="KeyE" && event.ctrlKey==true )
        {
            event.preventDefault();
            inputSacar.setAttribute("disabled", "disabled");
            inputIngresar.removeAttribute("disabled");
            inputIngresar.focus();
        }

        //Si pulsamos control+S, haremos el focus al segundo input
        if(event.code=="KeyS" && event.ctrlKey==true )
        {
            event.preventDefault();
            inputIngresar.setAttribute("disabled", "disabled");
            inputSacar.removeAttribute("disabled");
            inputSacar.focus();
        }

        if(event.code=="Enter")
        {
            // check for focus
            var isFocusedPrimer = (document.activeElement === inputIngresar);
            var isFocusedSegun = (document.activeElement === inputSacar);
            //Si el foco esta en el primero, introduciremos la matricula en la tabla
            if(isFocusedPrimer==true)
            {
                var matricula = inputIngresar.value;
                var matriculaCorrecta=comprobarMatricula(matricula); //Comprobamos que sea correcta
                if(matriculaCorrecta)
                {
                    parking.crearPlaza(matricula); //Creamos la plaza y l aigualamos a una booleana para saber si esta repetida
                    guardarTabla(parking); //La guardamos en la tabla LocalStorage
                    inputIngresar.value="";
                    inputIngresar.focus(); //Ponemos el focus otra vez en ingresar
                }           
            }        
            if(isFocusedSegun==true)
            {
                var existe=parking.getPlaza(inputSacar.value);
                if(existe)
                {
                    pintarTicket(parking.getPlaza(inputSacar.value));
                    guardarDineroCaja(parking.getPlaza(inputSacar.value));
                    parking.eliminarPlaza(inputSacar.value);
                    inputSacar.value="";
                    guardarTabla();
                    inputSacar.focus();
                }
                
            }
            pintarPlazas();
        }
    });

    setInterval(function()
    {
        pintarPlazas();
    }, 30000);
});