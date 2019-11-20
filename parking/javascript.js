function pintarPlazas()
{
    var tbody = document.getElementById("tabla").children[1];
    tbody.innerHTML = "";

    parking.plazasOcupadas.forEach(plaza => {
        pintarFila(plaza);
    });
}