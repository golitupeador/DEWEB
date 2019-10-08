/*Juego tres en raya*/

var j = new TresEnRaya("Juan", "Antonio");

function TresEnRaya(jug1,jug2)
{
    this.jug1=jug1;
    this.jug2=jug2;
    this.juego=[[],[],[]];
    this.turno=0;
}

TresEnRaya.prototype.jugar=function(f,c)
{
    if(this.juego[f][c]===undefined)
    {
        //Guardo la jugada
        this.juego[f][c]=this.turno;
        
        //Comprobamos si alguien ha ganado
        this.victoria();
        //Cambio el turno
        if(this.turno==0)
        {
            this.turno=1;
        }else
        {
            this.turno=0;
        }
    }
}

TresEnRaya.prototype.victoria=function()
{
    if(this.juego[0][0]!=undefined && this.juego[0][0]!=null && 
        this.juego[0][1]!=undefined && this.juego[0][1]!=null &&
        this.juego[0][2]!=undefined && this.juego[0][2]!=null )
    {
        if(this.juego[0][0]==this.juego[0][1] && this.juego[0][1]==this.juego[0][2])
        {
            alert("has ganado");
        }
    }
    else if(this.juego[1][0]!=undefined && this.juego[1][0]!=null && 
        this.juego[1][1]!=undefined && this.juego[1][1]!=null &&
        this.juego[1][2]!=undefined && this.juego[1][2]!=null )
    {
        if(this.juego[1][0]==this.juego[1][1] && this.juego[1][1]==this.juego[1][2])
        {
            alert("has ganado");
        }
    }
    else if(this.juego[2][0]!=undefined && this.juego[2][0]!=null && 
        this.juego[2][1]!=undefined && this.juego[2][1]!=null &&
        this.juego[2][2]!=undefined && this.juego[2][2]!=null )
    {
        if(this.juego[2][0]==this.juego[2][1] && this.juego[2][1]==this.juego[2][2])
        {
            alert("has ganado");
        }
    }
    else if(this.juego[0][0]!=undefined && this.juego[0][0]!=null && 
        this.juego[1][0]!=undefined && this.juego[1][0]!=null &&
        this.juego[2][0]!=undefined && this.juego[2][0]!=null )
    {
        if(this.juego[0][0]==this.juego[1][0] && this.juego[1][0]==this.juego[2][0])
        {
            alert("has ganado");
        }
    }
    else if(this.juego[0][1]!=undefined && this.juego[0][1]!=null && 
        this.juego[1][1]!=undefined && this.juego[1][1]!=null &&
        this.juego[2][1]!=undefined && this.juego[2][1]!=null )
    {
        if(this.juego[0][1]==this.juego[1][1] && this.juego[1][1]==this.juego[2][1])
        {
            alert("has ganado");
        }
    }
    else if(this.juego[0][2]!=undefined && this.juego[0][2]!=null && 
        this.juego[1][2]!=undefined && this.juego[1][2]!=null &&
        this.juego[2][2]!=undefined && this.juego[2][2]!=null )
    {
        if(this.juego[0][2]==this.juego[1][2] && this.juego[1][2]==this.juego[2][2])
        {
            alert("has ganado");
        }
    }
    else if(this.juego[0][0]!=undefined && this.juego[0][0]!=null && 
        this.juego[1][1]!=undefined && this.juego[1][1]!=null &&
        this.juego[2][2]!=undefined && this.juego[2][2]!=null )
    {
        if(this.juego[0][0]==this.juego[1][1] && this.juego[1][1]==this.juego[2][2])
        {
            alert("has ganado");
        }
    }
    else if(this.juego[0][2]!=undefined && this.juego[0][2]!=null && 
        this.juego[1][1]!=undefined && this.juego[1][1]!=null &&
        this.juego[2][0]!=undefined && this.juego[2][0]!=null )
    {
        if(this.juego[0][2]==this.juego[1][1] && this.juego[1][1]==this.juego[2][0])
        {
            alert("has ganado");
        }
    }
    




/*
    if(( 
        (this.juego[1][0]==this.juego[1][1] && this.juego[0][1]==this.juego[1][2]) ||
        (this.juego[2][0]==this.juego[2][1] && this.juego[2][1]==this.juego[2][2]))
    {
        alert("Has ganado");
    }*/
}

function seleccion(x,y)
{
    var turnoAux;
    if(j.turno==0)
    {
        turnoAux="x";
    }
    else{
        turnoAux="o"
    }

    j.jugar(x,y);
    
    document.getElementById(x + "-" + y).innerHTML=turnoAux;
}


