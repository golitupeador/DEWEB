
window.addEventListener("load",function(){
    //Recogemos los valores de la tabla en siu
    var tabla= document.getElementById("tabla");
    //Añadimos el escucha cuando se clicke la tabla
    tabla.addEventListener("click", function(event){
        //coge el objeto de lo que ha clickado
        if (event===undefined) event= window.event;
        var target= 'target' in event? event.target : event.srcElement;

        if(target.tagName=="TH")
        {
            target.ordenar();
        }
    })

    tabla.addEventListener("dblclick", function(event){
        if (event===undefined) event= window.event;
        var target= 'target' in event? event.target : event.srcElement;
        if(target.tagName=="TD")
        {
            if(target.children.length == 0)
            {
                target.editar();
            }
            
        }
    })

    var botones  = document.getElementsByClassName("borrar");
    for(var i=0 ; i<botones.length ; i++ )
    {
        botones[i].addEventListener("click", function(event){
            if (event===undefined) event= window.event;
            var target= 'target' in event? event.target : event.srcElement;
            var tr=target.parentElement.parentElement;
            tr.parentElement.removeChild(tr);
        })
    }

    var formulario= document.getElementById("formulario");
    formulario.addEventListener("submit",function(event)
    {
        event.preventDefault();
        anadir();
    })

})


//Vamos a darle una funcion a todas las celdas de la tabla( CON EL PROTOTYPEEEEEEE)
HTMLTableCellElement.prototype.ordenar=function(){
    var array=[];
    //Para coger el tbody nos vamos desde la cell hasta el padre del padredel padre(cuenta el texto) y luego al children en la posicion 1
    var tbody=this.parentElement.parentElement.parentElement.children[1];
    //Camputamos tambien la posicion de la celda clickada
    var posicionCelda=this.cellIndex;
    
    //Con esto rellenamos el array con los objetos del tobody
    for(var i=0; i<tbody.children.length; i++)
    {
        array.push(tbody.children[i]);
    }

    //Con esto comprobamos que no es un not a number (es decir,es un numero, asique lo ordenamos de manera diferente)
    if(!isNaN(array[0].children[posicionCelda].innerHTML))
    {
        //Llamamos a la funcion de ordenar y le definimos que a  sea el children de la posicion que queremos y lo pase a entero
        array.sort(function (a,b) {
            a=parseInt(a.children[posicionCelda].innerHTML);
            b=parseInt(b.children[posicionCelda].innerHTML);
            if(a>b)
            {
                return 1;
            }
            else if(a<b)
            {
                return -1;
            }
            else{
                return 1;
            }
         });
    }else
    {
        array.sort(function (a,b) {return a.children[posicionCelda].innerHTML.localeCompare(b.children[posicionCelda].innerHTML); });
    }
    
    //Con el bucle, le introducimos el array ordenado al tbody
    for(var i=0 ; i<array.length ; i++)
    {
        tbody.appendChild(array[i]);
    }
}

HTMLTableCellElement.prototype.editar=function(){
    //Cogemos el valor del texto
    var texto = this.innerText;
    //Creamos un input para poder editarlo
    var input = document.createElement("input");
    input.type="text";
    input.value = texto;
    //Cuando se pierda el foco se añade el texot que se tiene en el input
    input.onblur=function(){
        var texto = this.value;
        this.parentNode.innerHTML=texto;
    }
    this.innerHTML="";
    this.appendChild(input);
}


function anadir()
{
    
    var tr=document.createElement("tr"); //Creamos un tr
    var tabla= document.getElementById("tabla"); //Cogemos la tabla
    tabla.appendChild(tr); //Le introducimos al tbody el tr

    var dni=document.createElement("td"); //Creamos un td
    dni.innerHTML=document.getElementById("dniFormulario").value; //Cogemos del formulario el dni
    tr.appendChild(dni); //Se lo metemos al tr, esto se tiene que hacer en orden

    var nombre=document.createElement("td")
    nombre.innerHTML=document.getElementById("nombreFormulario").value;
    tr.appendChild(nombre);

    var apellido1=document.createElement("td")
    apellido1.innerHTML=document.getElementById("apellido1Formulario").value;
    tr.appendChild(apellido1);

    var apellido2=document.createElement("td")
    apellido2.innerHTML=document.getElementById("apellido2Formulario").value;
    tr.appendChild(apellido2);

    //Creamos un td con el boton de borrar para ese td y ademas, le dotamos de la funcion
    var borrarTD=document.createElement("td");
    var botonTD=document.createElement("button");
    botonTD.innerHTML="Borrar";
    botonTD.setAttribute("class","borrar");
    borrarTD.appendChild(botonTD);
    tr.appendChild(borrarTD);
    botonTD.addEventListener("click", function(event){
        if (event===undefined) event= window.event;
        var target= 'target' in event? event.target : event.srcElement;
        var tr=target.parentElement.parentElement;
        tr.parentElement.removeChild(tr);
    })

    //Reseteamos el formulario
    document.getElementById("dniFormulario").value="";
    document.getElementById("nombreFormulario").value="";
    document.getElementById("apellido1Formulario").value="";
    document.getElementById("apellido2Formulario").value="";
}
