//Variable tipo de moneda
let elegirMoneda = document.getElementById('valoresMonedas');
let moneda = elegirMoneda.value;
console.log("La moneda es " + moneda)

function nuevaMoneda () {
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
/*
const grafico = querySelector('#myChart');
async () => {let myChart = await new Chart(grafico, {
    type: 'line',
    data: {
        labels: [data['serie'][0]['fecha'], data['serie'][1]['fecha'], data['serie'][2]['fecha'], data['serie'][3]['fecha'], data['serie'][4]['fecha'], data['serie'][5]['fecha'], data['serie'][6]['fecha'], data['serie'][7]['fecha'], data['serie'][8]['fecha'], data['serie'][9]['fecha']],
        dataset: [{
            label: `<p>Gráfico de últimos 10 días de ${moneda} `,
            data: [data['serie'][0]['valor'], data['serie'][1]['valor'], data['serie'][2]['valor'], data['serie'][3]['valor'], data['serie'][4]['valor'], data['serie'][5]['valor'], data['serie'][6]['valor'], data['serie'][7]['valor'], data['serie'][8]['valor'], data['serie'][9]['valor']]
        }],
    }
})}
*/
//Evento del botón
botonBuscar.addEventListener('click', () => {
    nuevaMoneda();
    console.log("La moneda ahora es " + moneda);
    consulta();

   // renderGrafica();

})

