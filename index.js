var prestamos = []
var simuladorCredito = {
    prestamoActual: {},


    calcularCuotas() {
        var monto = parseFloat(document.getElementById("monto").value)
        var tasa = parseFloat(document.getElementById("tasa").value)
        var cuotas = parseInt(document.getElementById("cuotas").value)

        var totalAPagar = monto * (1 + tasa)
        var cuotaMensual = totalAPagar / cuotas


        this.prestamoActual = {
            monto: monto,
            tasa: tasa,
            plazo: cuotas,
            cuota: cuotaMensual,
            total: totalAPagar
        };


        document.getElementById("totalAPagar").textContent = totalAPagar.toFixed(2);
        document.getElementById("cuotaMensual").textContent = cuotaMensual.toFixed(2);
    }

};
document.getElementById("formulario").addEventListener("submit", (e) => {
    var dni = e.target.dni.value;
    var cliente = prestamos.find((prestamo) => {
        if (prestamo.cliente.dni == dni)
            return prestamo.cliente
    })
    if (cliente == undefined) {
        cliente = {
            nombre: e.target.nombre.value,
            apellido: e.target.apellido.value,
            dni: dni,
            fechaNacimiento: e.target.fechaNacimiento.value,
            correo: e.target.correo.value
        }
    }

    simuladorCredito.prestamoActual.cliente = cliente;
    prestamos.push(simuladorCredito.prestamoActual);
    console.log(prestamos)
    e.preventDefault()
    localStorage.setItem("datos", JSON.stringify(prestamos))
})



/* function buscarPordni() {
    this.prestamos.map(function (prestamo) {
        if (prestamos.dni === getElementById("dni").value) {
            console.log(prestamo);
        }
    })
} */


