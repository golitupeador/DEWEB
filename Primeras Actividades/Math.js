//Numeros de loteria, 0 al 999
//usar math .random, math ceil

var bolas= [999];
var numeroExtraido;

function loteria()
{
    var bolas= [];
    for(i=0;i<1000;i++)
        bolas.push(i);
        bolas.sort(function(a,b){return Math.random()-0.5})
        document.getElementById("premiados").value+=bolas.join("/n")
}
