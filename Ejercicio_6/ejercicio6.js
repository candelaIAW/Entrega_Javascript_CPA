document.addEventListener("DOMContentLoaded", function () {
    const actualizarTotales = () => {
        let total = 0;
        document.querySelectorAll("tbody tr").forEach(row => {
            let cantidad = parseInt(row.querySelector(".cantidad").value);
            let precio = parseFloat(row.querySelector(".precio").value);
            let subtotal = cantidad * precio;
            row.querySelector(".subtotal").textContent = `${subtotal} €`;
            total += subtotal;
        });
        document.getElementById("total").textContent = total;
    };

    document.querySelectorAll(".btn-plus").forEach(btn => {
        btn.addEventListener("click", function () {
            let input = this.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            actualizarTotales();
        });
    });

    document.querySelectorAll(".btn-minus").forEach(btn => {
        btn.addEventListener("click", function () {
            let input = this.nextElementSibling;
            if (parseInt(input.value) > 0) {
                input.value = parseInt(input.value) - 1;
                actualizarTotales();
            }
        });
    });

    document.querySelectorAll(".cantidad").forEach(input => {
        input.addEventListener("input", actualizarTotales);
    });
});
