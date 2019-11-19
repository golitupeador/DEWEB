var parking;


window.addEventListener("load",function()
{
    parking=new Parking();
    anadirMatriculasRobadas();
    var inputIngresar=document.getElementById("ingresarMatricula");
    inputIngresar.focus();
    var inputSacar=document.getElementById("sacarMatricula");
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
            var focusPrimerInput = inputIngresar;
            var focusSegundoInput = inputSacar;

            // check for focus
            var isFocusedPrimer = (document.activeElement === focusPrimerInput);
            var isFocusedSegun = (document.activeElement === focusSegundoInput);
            //Si el foco esta en el primero, introduciremos la matricula en la tabla
            if(isFocusedPrimer==true)
            {
                pintarPlazaEnTabla();
                focusPrimerInput.focus();
            }
                
            if(isFocusedSegun==true)
            {
                var cajaTicket=document.getElementById("ticket");
                sacarPlazaDeTabla();
                crearTicket(parking.getPlaza(focusSegundoInput.value));
                parking.eliminarPlaza(focusSegundoInput.value);
                setTimeout(function(){ cajaTicket.innerHTML="" }, 10000);
                document.getElementById("sacarMatricula").value="";
                focusSegundoInput.focus();
            }
        }
    });

    setInterval(function()
    {
        var tbody= document.getElementById("tabla").children[1];
        tbody.innerHTML="";

        parking.plazasOcupadas.forEach(plaza => {
            pintarFila(plaza);
        });
    }, 2000);
});

function pintarPlazaEnTabla()
{
    //Primero comprobaremos que el patron es el adecuado

    //Usaremos estas variables para comprobar el patron de las matriclas
    var expresionRegular;
    var matricula = document.getElementById('ingresarMatricula').value;
    expresionRegular = /^\d{6}|\d{4}\-[A-Z](?!Q|Ñ|A|E|I|O|U){3}|[A-Z](?!Q|Ñ|A|E|I|O|U){2}\-\d{4}\-[A-Z](?!Q|Ñ|A|E|I|O|U){3}$/
    var matricula=document.getElementById("ingresarMatricula").value;
    
    if(expresionRegular.test (matricula) == true)
    {
        var matriculaValida=parking.crearPlaza(matricula); //Creamos la plaza y l aigualamos a una booleana para saber si esta repetida
        //Comprobaremos que no este repetida la matricula
        if(matriculaValida==true)
        {
            var plaza = parking.plazasOcupadas[parking.plazasOcupadas.length-1];
            pintarFila(plaza);

            document.getElementById("ingresarMatricula").value="";
        }
        else
        {
            alert("LLAMANDO A LA POLISSSEEE");
        }
    }else
    {
        alert("El patron no es correcto");
    }
}

function sacarPlazaDeTabla()
{
    var expresionRegular;
    var matricula = document.getElementById('sacarMatricula').value;
    expresionRegular = /^\d{6}|\d{4}\-[A-Z](?!Q|Ñ|A|E|I|O|U){3}|[A-Z](?!Q|Ñ|A|E|I|O|U){2}\-\d{4}\-[A-Z](?!Q|Ñ|A|E|I|O|U){3}$/
    var matricula=document.getElementById("sacarMatricula").value;
    
    if(expresionRegular.test (matricula) == true)
    {
        var resultado=parking.liberarPlaza(matricula);
        if(resultado.ok==true)
        {
            //Lo eliminamos de la tabla
            document.getElementById("tabla").children[1].deleteRow(resultado.index);

        }else
        {
            alert("La matricula no se encuentra en el parking");
        }
    }
}
function anadirMatriculasRobadas()
{
    var arrayMatriculas=["1234-WWW","1234-ZZZ"];
    var myJSONMatriculas = JSON.stringify(arrayMatriculas);
    localStorage.setItem("matricula", myJSONMatriculas);
}

function crearTicket(plaza)
{
    var cajaTicket=document.getElementById("ticket");
    var tickets=document.createElement("div");
    tickets.setAttribute("class", "tickets")
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
    p.innerHTML+="</br>"

}



function pintarFila(plaza)
{
    var tabla= document.getElementById("tabla"); //Cogemos la tabla
    var tr=document.createElement("tr"); //Creamos un tr
    tabla.children[1].appendChild(tr); //Le introducimos al tbody el tr

    var matricula=document.createElement("td"); //Creamos un td
    matricula.innerHTML=plaza.matricula; //Cogemos la matricula del parking que acabamos de introducr
    tr.appendChild(matricula); //Se lo metemos al tr, esto se tiene que hacer en orden

    var horas = plaza.horaEntrada.getHours();
    var minutos= plaza.horaEntrada.getMinutes();
    var segundos= plaza.horaEntrada.getSeconds();
    var horaEntrada=document.createElement("td"); //Creamos un td
    horaEntrada.innerHTML=plaza.horaEntrada.toLocaleDateString()+" "+plaza.horaEntrada.toLocaleTimeString(); //Cogemos del formulario el dni
    tr.appendChild(horaEntrada); //Se lo metemos al tr, esto se tiene que hacer en orden

    var precioTotal=document.createElement("td"); //Creamos un td
    precioTotal.innerHTML=plaza.precioTotal()+"€"; //Cogemos del formulario el dni
    tr.appendChild(precioTotal); //Se lo metemos al tr, esto se tiene que hacer en orden
}