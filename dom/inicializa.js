//Escribi la hora en el primer p
window.addEventListener("load",function(){
    var btn1=document.getElementById("ejecuta");
    btn1.addEventListener("click",function()
    {
        var p=document.getElementsByTagName("p")[0];
        p.innerHTML+=Date();
    })
    
})
