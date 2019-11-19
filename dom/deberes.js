//AL BOTON  DE MATRICULAR LE VAMOS A DAR FUNCIONALIDAD AÑADIENDOLE UN EVENTLISTENER
window.addEventListener("load",function(){
    var matricular=document.getElementById("matricular");
    var aprobar=document.getElementById("aprobados");
    matricular.addEventListener("click",function()
    {
        //Con esto hacemos que el form no envieel formulario
        event.preventDefault();


        //Recogemos todo el texto del text area y lo insertamos en arrays por salto de lineas
        var entrada=document.getElementById("textarea");
        var alumnos=entrada.value.split("\n");
        var option;

        //Recogemos los datos de los alumnos para no tener que recorrerlo constantemente mas adelante
        var s1=document.getElementById("alumnosMatriculados");
        for(var i=0;i<alumnos.length;i++)
        {
            if(/\w/.test(alumnos[i]))
            {
                option=document.createElement("option");
                option.innerHTML=alumnos[i];
                s1.appendChild(option);
            }
            
        }
    })

    document.getElementById("izq").addEventListener("click",function()
    {
        eval.preventDefault();
        matricular.pasarA(aprobar);
    })
    
})