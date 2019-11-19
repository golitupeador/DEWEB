window.addEventListener("load",function(){
    var i =0;
    var th=document.getElementsByTagName("th")
    
})


HTMLTableCellElement.prototype.sort.call(document.getElementsByTagName("th"),function(a,b){
	return a.firstChild.firstChild.nodeValue*1 < b.firstChild.firstChild.nodeValue*1
});
$("table").append(tableRows);


HTMLTableCellElement.prototype.editar=function()
{
    var texto=this.innerText;
    /**Aqui habria que aplicar un if, en el que comprobase si el parent node tiene la clase (attribute "editable")  */
    var input=document.createElement("input");
    input.type="text";
    input.value=texto;
    input.onblur=function()
    {
        
        var texto=this.value;
        this.parentNode.innerHTML=texto;
    }
    texto.innerHTML="";
    texto.appendChild(input);
}

/*Esto servira para ordenar JEJEJEJEJEJEJ*/
for(i=0;i<ths.lenght;i++)
{
    ths[i].onclick=programar(i);
}
function programar(i){
    return function(){
        console.log(i)
    }
}
/* tabla.tbodies[0].rows[0].cells.length
    documen.getElementsByfName("th")[0].addEventListener("click",function(ev){console.log(ev)} (con este, y luego ev.target.cellindex te dice el indexde la columna cellIndex)
    la closura seria que en el bucle, si usamos la i dentro de el a la hora de darle eventos a los th, deberia de ser un funcion, ejemplo, 
    this[i].onclick=programar(i)
    y lo otro seria
    function programar(i){
        return function
    }*/