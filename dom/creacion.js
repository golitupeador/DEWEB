//Escribi la hora en el primer p
window.addEventListener("load",function(){
    var btn1=document.getElementById("ejecuta");
    btn1.addEventListener("click",function()
    {
        var p=document.getElementsByTagName("p")[0];
        p.innerHTML+=document.lastModified;
    })
    var pes=document.getElementsByTagName("p");
    var i;

    var pulsadoP=function()
    {
        if(this.style.color=="red")
        {
            this.style.color="green"
        }else
        {
                this.style.color="red";
        }
    }
    for(i=0;i<pes.length;i++)
    {
        pes[i].onclick=pulsadoP
    }
    
})
