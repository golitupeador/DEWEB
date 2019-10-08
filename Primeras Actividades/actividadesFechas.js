//CON ESTO OBREESCRIBIMOS EL ORIGINAL Y TIENE DE IA LO QUE DURA LA SESION
Date.prototype.toString=function()
{
    var dia=this.getDate();
    dia=((dia<10)?"0":"")+dia;// SI DIA ES MENOR QUE 10 SE AÑADE UN 0,SI NO, COMILLAS, Y SE LE CONCATENA DIA
    var mes=this.getMonth()+1;
    mes=((mes<10)?"0":"")+mes;// SI MES ES MENOR QUE 10 SE AÑADE UN 0,SI NO, COMILLAS, Y SE LE CONCATENA DIA
    var anio=this.getFullYear();
    return dia+"/"+mes+"/"+anio;
    
}

function compruebaFecha(){
    var cadena=document.getElementById('fecha').value;

    if(cadena!=undefined && cadena!=null && cadena!="")
    {
        var expresionFecha=/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        
        if(cadena.match(expresionFecha))
        {
            alert("La fecha es valida");
        }
        else
        {
            alert("La fecha no es valida");
        }
    }else
    {
        alert("La cadena esta vacia");
        return false;
    }
    
    
}


function esMayorEdad(){
    var fechaMayorEdad=document.getElementById('fecha2').value;
    
   /* if(fechaMayorEdad!=undefined && fechaMayorEdad!=null && fechaMayorEdad!="")
    {
        var expresionFecha=/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        
        if(fechaMayorEdad.match(expresionFecha))
        {*/
            var date= new Date(fechaMayorEdad);

            var fechaActual=new Date;
            var edad = fechaActual.getFullYear() - date.getFullYear();
            var mes = fechaActual.getMonth() - date.getMonth();
            if (mes < 0 || (mes === 0 && fechaActual.getDate() < date.getDate())) {
                edad--;
            }    
            if(edad>17)
            {
                alert("Es mayor de edad")
            }
            else
            {
                alert("No es mayor de edad")
            }
        }
       /* else
        {
            alert("La fecha no es valida");
        }
    }else
    {
        alert("La cadena esta vacia");
        return false;
    }
}*/


function esMayorQue(){
    var fecha1=document.getElementById('fechaComparar1').value;
    var fecha2=document.getElementById('fechaComparar2').value;
    
    if(fecha1!=undefined && fecha1!=null && fecha1!="" && fecha2!=undefined && fecha2!=null && fecha2!="")
    {
        var expresionFecha=/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        
        if(fecha1.match(expresionFecha)&&fecha2.match(expresionFecha))
        {
            var fechaPrimera= new Date(fecha1);
            var fechaSegunda=new Date(fecha2);
            var resultado;
            if(fechaPrimera>fechaSegunda)
            {
                resultado=1;
                alert("Fecha 1 mayor");
            }
            else if(fechaPrimera<fechaSegunda)
            {
                resultado=-1;
                alert("Fecha 2 mayor");
            }else
            {
                resultado=0
                alert("Iguales");
            }
        }
        else
        {
            alert("La fecha no es valida");
        }
    }else
    {
        alert("La cadena esta vacia");
        return false;
    }
}


function diasVivo(){
    var diasVivo=document.getElementById('fecha4').value;
    
    if(diasVivo!=undefined && diasVivo!=null && diasVivo!="")
    {
        var expresionFecha=/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        
        if(diasVivo.match(expresionFecha))
        {
            var fechaIntroducida= new Date(diasVivo);
            var fechaActual=new Date;
            var diferenciaEntreFechas=(fechaActual.getFullYear*365+fechaActual.getMonth*12+fechaActual.getDate)-(fechaIntroducida.getFullYear*365+fechaIntroducida.getMonth*12+fechaIntroducida.getDate);
           
            alert(diferenciaEntreFechas);
        }
        else
        {
            alert("La fecha no es valida");
        }
    }else
    {
        alert("La cadena esta vacia");
        return false;
    }
}

