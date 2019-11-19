//Libreria para trabajar con HTML
HTMLSelectElement.prototype.ordenar=function()
{
    var v=[];
    var i;
    for (i=0;i<this.options.length;i++)
        v[i]=this.options[i];
    v.sort(function(a,b){return a.innerHTML.localeCompare(b.innerHTML)})
    for (i=0;i<this.options.length;i++)
    {
        this.appendChild(v[i]);
    }
}

HTMLSelectElement.prototype.pasarA=function(seleccionados)
{
    while(this.selectedIndex!=1)
    {
        option=this.options[this.selectedIndex]
        option.selected=false;
        seleccionados.appendChild(option)
    }
    seleccionados.ordenar();
}