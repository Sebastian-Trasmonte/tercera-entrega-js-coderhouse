var simuladorCredito = {
    prestamosAnteriores: [],

    calcularCuotas: function () {
        var monto = parseFloat(document.getElementById("monto").value)
        var tasa = parseFloat(document.getElementById("tasa").value)
        var cuotas = parseInt(document.getElementById("cuotas").value)

        var totalAPagar = monto * (1 + tasa)
        var cuotaMensual = totalAPagar / cuotas


        var prestamoActual = {
            monto: monto,
            tasa: tasa,
            plazo: cuotas,
            cuota: cuotaMensual,
            total: totalAPagar
        };
        this.prestamosAnteriores.push(prestamoActual);


        document.getElementById("totalAPagar").textContent = totalAPagar;
        document.getElementById("cuotaMensual").textContent = cuotaMensual;
    }
}


/*     buscarPorMonto: function (monto) {
        return this.prestamosAnteriores.map(function (prestamo) {
            if (prestamo.monto === monto) {
                return prestamo;
            } else {
                return null;
            }
        }).filter(function (prestamo) {
            return prestamo !== null;
        });
    }
}; */
/* let lista = true

while (lista) {
    let opcion = parseInt(
        prompt(
            "Elija una opcion para continuar \n 1- Simular un credito \n 2- Buscar un credito \n 3- Salir"
        )

    );
    switch (opcion) {
        case 1:
            var monto = parseFloat(prompt("Ingrese el monto del préstamo en pesos:"));
            var tasa = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
            var plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));
            var resultadoPrestamo = simuladorCredito.calcularCuota(monto, tasa, plazo);
            var resultadoMensaje = `Cuota mensual: $${resultadoPrestamo.cuotaMensual.toFixed(2)}\nTotal a pagar: $${resultadoPrestamo.totalAPagar.toFixed(2)}`;
            alert("Resultados del préstamo:\n" + resultadoMensaje);
            break;
        case 2:
            var montoBusqueda = parseFloat(prompt("Ingrese el monto para buscar préstamos anteriores:"));
            var prestamosAnteriores = simuladorCredito.buscarPorMonto(montoBusqueda);

            var mensajeBusqueda = "Préstamos anteriores por monto de $" + montoBusqueda + ":\n";

            if (prestamosAnteriores.length === 0) {
                mensajeBusqueda += "No se encontraron préstamos anteriores con ese monto.";
            } else {
                for (var i = 0; i < prestamosAnteriores.length; i++) {
                    var prestamo = prestamosAnteriores[i];
                    mensajeBusqueda += `Monto: $${prestamo.monto.toFixed(2)}, Tasa: ${prestamo.tasa}%, Plazo: ${prestamo.plazo} meses,\nCuota mensual: $${resultadoPrestamo.cuotaMensual.toFixed(2)}\nTotal a pagar: $${resultadoPrestamo.totalAPagar.toFixed(2)}\n`;
                }
            }

            alert(mensajeBusqueda);
            break;
        case 3:
            alert("Gracias por visitar nuestra web");
            lista = false;
            break;
        default:
            alert("La opcion invalida");
    }
} */