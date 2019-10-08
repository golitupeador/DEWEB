/*Juego tres en raya*/

function TresEnRaya(jug1,jug2)
{
    this.jug1=jug1;
    this.jug2=jug2;
    this.juego=[[],[],[]];
    this.turno=Math.round(Math.random);
}

TresEnRaya.prototype.jugar=function(f,c)
{
    if(this.juego[f][c]===undefined)
    {
        this.juego[f][c]=this.turno;
        this.turno=(this.turno+1)%2;
        //Comprobar si hay vic
    }
}

TresEnRaya.prototype.victoria=function(f,c)
{
    //CODIGO PARA COMPROBAR SI HAY VICTORIA
    //RETURN TRUE/FALSE
}

var j=new TresEnRaya("Juan", "Antonio");
j.juego(0,0);