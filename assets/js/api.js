//Variable tipo de moneda
let elegirMoneda = document.getElementById('valoresMonedas');
let moneda = elegirMoneda.value;
console.log("La moneda es " + moneda)

function nuevaMoneda () {
    moneda = elegirMoneda.value;    
    return moneda
}


//Variable del ID del botón
let botonBuscar = document.querySelector('#btn-buscar');

//Función para tomar consulta desde la API
const consulta = async () => {
    try {
        //variable valor del input en pesos chilenos
        let clp = document.querySelector('#clp').value;

        //Variable para imprimir resultado de consulta
        let respuestaConsulta = document.querySelector('.card-footer');

        //Invocar la api con el tipo de moneda
        const res = await fetch(`https://mindicador.cl/api/${moneda}`);
        const data = await res.json();

        if (clp <= 0) {
            alert('Debes ingresar una cantidad mínima de $1 peso chileno para poder usar este botón')
        } else {
            let operacion = clp / data['serie'][0]['valor'];
            respuestaConsulta.innerHTML = `<p>El resultado es: ${operacion.toFixed(2)} de ${data['nombre']}`
        }
        
        renderGrafica();
        
    } catch (error) {
        error.message
    }
}

//Función del gráfico
async function getAndCreateDataToChart() {
    const res = await
        fetch(`https://mindicador.cl/api/${moneda}`);
    const sismos = await res.json();
    const labels = sismos.map((sismo) => {
        return sismo.Fecha;
    });
    const data = sismos.map((sismo) => {
        const magnitud = sismo.Magnitud.split(" ")[0];
        return Number(magnitud);
    });
    const datasets = [
        {
            label: "Sismo",
            borderColor: "rgb(255, 99, 132)",
            data
        }
    ];
    return { labels, datasets };
}
async function renderGrafica() {
    const data = await getAndCreateDataToChart();
    const config = {
        type: "line",
        data
    };
    const myChart = document.getElementById("myChart");
    myChart.style.backgroundColor = "white";
    new Chart(myChart, config);
}


//Evento del botón
botonBuscar.addEventListener('click', () => {
    consulta();
    nuevaMoneda();
    console.log("La moneda ahora es " + moneda);

})

