//Variable tipo de moneda
let elegirMoneda = document.getElementById('valoresMonedas');
let moneda = elegirMoneda.value;
console.log("La moneda es " + moneda)

function nuevaMoneda() {
    moneda = elegirMoneda.value;
    return moneda
}

//Variables globales
let res;
let data;

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
        res = await fetch(`https://mindicador.cl/api/${moneda}`);
        data = await res.json();

        if (clp <= 0) {
            alert('Debes ingresar una cantidad mínima de $1 peso chileno para poder usar este botón')
        } else {
            let operacion = clp / data['serie'][0]['valor'];
            respuestaConsulta.innerHTML = `<p>El resultado es: ${operacion.toFixed(2)} de ${data['nombre']}`
        }


    } catch (error) {
        error.message
    }
}

//Función del gráfico
async function getAndCreateDataToChart() {
    const resGrafico = await fetch(`https://mindicador.cl/api/${moneda}`);
    const dataGrafico = await resGrafico.json();

    //Eje X
    const ejeX = [dataGrafico['serie'][0]['fecha'], dataGrafico['serie'][1]['fecha'], dataGrafico['serie'][2]['fecha'], dataGrafico['serie'][3]['fecha'], dataGrafico['serie'][4]['fecha'], dataGrafico['serie'][5]['fecha'], dataGrafico['serie'][6]['fecha'], dataGrafico['serie'][7]['fecha'], dataGrafico['serie'][8]['fecha'], dataGrafico['serie'][9]['fecha']];

    //Eje y 
    const ejeY = [dataGrafico['serie'][0]['valor'], dataGrafico['serie'][1]['valor'], dataGrafico['serie'][2]['valor'], dataGrafico['serie'][3]['valor'], dataGrafico['serie'][4]['valor'], dataGrafico['serie'][5]['valor'], dataGrafico['serie'][6]['valor'], dataGrafico['serie'][7]['valor'], dataGrafico['serie'][8]['valor'], dataGrafico['serie'][9]['valor']];

    //Dataset
    const dataset = [{
        label: 'Valor útimos diez días',
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        data
    }
    ];
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return { ejeX, dataset };

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
    nuevaMoneda();
    console.log("La moneda ahora es " + moneda);
    renderGrafica();
    consulta();
})

