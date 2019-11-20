function Parking()
{
    this.numeroPlazas=5;
    this.plazasOcupadas=[];

    this.comprobarPolicia=function(matricula)
    {
        var resultado=true;
        var matriculaEncontrada=false;
        var matriculasRobadas = JSON.parse(localStorage.getItem("matriculaRobada"));
        this.plazasOcupadas.forEach(plaza => {
            if(plaza.matricula==matricula)
            {
                matriculaEncontrada=true;
                resultado=false;
            }
        });

        if(matriculaEncontrada==false)
        {
            matriculasRobadas.forEach(plaza => {
                if(plaza==matricula)
                {
                    matriculaEncontrada=true;
                    resultado=false;
                }
                else
                {
                    resultado==true;
                }
            });
            
        }
        return resultado;
    }
    this.crearPlaza=function(matricula)
    {
        if(parking.numeroPlazas > parking.plazasOcupadas.length)
        {
            var plaza=new Plaza(matricula);  
            this.plazasOcupadas.push(plaza);              
        }else
        {
            alert("NO HAY PLAZAS")
        }
    }
    
    this.getPlaza=function(matricula)
    {
        var plaza=null;
        this.plazasOcupadas.forEach(plazaOcupada => 
        {
            if(plazaOcupada.matricula==matricula)
            {
                plaza=plazaOcupada;
            }
        });
        if(plaza!=null)
        {
            return plaza;
        }
        else
        {
            return false;
        }
    }


    this.eliminarPlaza=function(matricula)
    {
        var index;
        var resultado=false;
        this.plazasOcupadas.forEach(plaza => {
            if(plaza.matricula==matricula)
            {    
                index = this.plazasOcupadas.indexOf(plaza);
                resultado=true;
            }
            
        });
        this.plazasOcupadas.splice(index,1);
        return resultado;
    }

}

function Plaza(matricula)
{
    this.matricula=matricula;
    this.horaEntrada=new Date();
    this.precioTotal=function()
    {
        var resultado=0;
        var diasEstacionado=this.calcularDiasEstacionado();
        if(diasEstacionado==0)
        {
            var horaSalida=new Date();
            var segundosTranscurridos=(horaSalida-this.horaEntrada)/1000;
            var minutos=Math.round(segundosTranscurridos/60);
            if(minutos>30)
            {
                minutos=minutos-30;
                var resultadoBruto=minutos*0.05;
                resultado=resultadoBruto.toFixed(2);
                if(resultado>15)
                {
                    resultado=15;
                }
            }
        }else
        {   //TODOS ESTOS CONDICIONALES SON PARA CALCULAR EL PRECIO CUANDO EL COCHE LLEVA MAS DE UN DIA 
            var salidaDiaEntrada=new Date();
            var salidaDiaEntrada=this.horaEntrada;

            salidaDiaEntrada.setHours(23);
            salidaDiaEntrada.setMinutes(59);
            salidaDiaEntrada.setSeconds(59);

            console.log(salidaDiaEntrada);
            console.log(this.horaEntrada);
            var segundosTranscurridos=(salidaDiaEntrada-this.horaEntrada)/1000;
            var minutos=Math.round(segundosTranscurridos/60);
            
            //Si la diferencia entrel ahora de entrada y las 23:59 es menor de 30 ese dia no lo contamos
            if(minutos<0 || minutos<30)
            {
                resultado=(diasEstacionado-1)*15  
            }
            //Si la diferencia es mayor de 300, lo contamos como 500
            else if(minutos>300)
            {
                resultado=diasEstacionado*15  
            }
            //Si esta entre esos valores tenemos que calcularlo
            else if(minutos>30 && minutos<300)
            {
                resultado=(diasEstacionado-1)*15
                minutos=minutos-30;
                var resultadoProvisional = 0;
                var resultadoProvisionalBruto = 0;
                resultadoProvisionalBruto=resultadoProvisionalBruto+(minutos*0.05);
                resultadoProvisional=resultadoProvisionalBruto.toFixed(2);

                if(resultadoProvisional>15)
                {
                    resultado=resultado+15;
                }else
                {
                    resultado=resultado+resultadoProvisional;
                }
            }
              
            //Y ahora a calcular el precio del dia actual
            var horaCero = new Date();
            horaCero.setHours(0,0,0,0);
            var horaSalida=new Date();
            var segundosTranscurridos=(horaSalida-horaCero)/1000;
            var minutos=Math.round(segundosTranscurridos/60);
            if(minutos>30 )
            {
                
                minutos=minutos-30;
                var resultadoProvisional = 0;
                var resultadoProvisionalBruto = 0;
                resultadoProvisionalBruto=resultadoProvisionalBruto+(minutos*0.05);
                resultadoProvisional=resultadoProvisionalBruto.toFixed(2);

                if(resultadoProvisional>15)
                {
                    resultado=resultado+15;
                }else
                {
                    resultado=resultado+resultadoProvisional;
                }
            }
        }
        return resultado;
    };

    this.calcularDiasEstacionado=function()
    {
        var fechaEstacionado= new Date(this.horaEntrada);
        var fechaActual=new Date();

        var diferenciaEntreFechas=(fechaActual.getFullYear()*365+fechaActual.getMonth()*12+fechaActual.getDate())-(fechaEstacionado.getFullYear()*365+fechaEstacionado.getMonth()*12+fechaEstacionado.getDate());
        return diferenciaEntreFechas;
    }
}

function Caja()
{
    dineroRecaudado= 0;
}

