function Parking()
{
    this.numeroPlazas=5;
    this.plazasOcupadas=[];

    this.crearPlaza=function(matricula)
    {
        var resultado=true;
        var matriculaEncontrada=false;
        var matriculasRobadas = JSON.parse(localStorage.getItem("matricula"));
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
                    
                }
            });
            
        }
        if(matriculaEncontrada==false && resultado==true)
        {
            var plaza=new Plaza(matricula);  
            this.plazasOcupadas.push(plaza);
        }    
        return resultado;    
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

    //Nos servira para, dandoleuna matricula, crear el ticket y liberar la plaza
    this.liberarPlaza=function(matricula)
    {
        var resultado=false;
        var index;
        
        this.plazasOcupadas.forEach(plaza => {
            if(plaza.matricula==matricula)
            {
                index = this.plazasOcupadas.indexOf(matricula);
                resultado=true;
            }
        });
        return {ok: resultado, indice: index, };
    }

    this.eliminarPlaza=function(matricula)
    {
        var index;
        this.plazasOcupadas.forEach(plaza => {
            if(plaza.matricula==matricula)
            {    
                index = this.plazasOcupadas.indexOf(plaza);
            }  
            
        });
        /*for(var i= 0; i<this.plazasOcupadas.length; i++)
        {
            var plazaOcupada=this.plazasOcupadas[i];
            if(plazaOcupada.matricula==matricula)
            {    
                index = this.plazasOcupadas.indexOf(plazaOcupada);
            }    
        }*/
       
        delete this.plazasOcupadas[index];
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
                resultado=minutos*0.05;
                if(resultado>15)
                {
                    resultado=15;
                }
            }
        }else
        {
            resultado=diasEstacionado*15
            var horaCero = new Date();
            horaCero.setHours(0,0,0,0);
            var horaSalida=new Date();
            var segundosTranscurridos=(horaSalida-horaCero)/1000;
            var minutos=Math.round(segundosTranscurridos/60);
            if(minutos>30)
            {
                
                minutos=minutos-30;
                resultado=resultado+(minutos*0.05);
                if(resultado>15)
                {
                    resultado=resultado+15;
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

