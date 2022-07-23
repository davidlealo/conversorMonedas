//Variable tipo de moneda
let elegirMoneda = document.getElementById('valoresMonedas');
let moneda = elegirMoneda.value;
console.log("La moneda es " + moneda)

//Variable gráfico
let grafico = document.getElementById('grafico');

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
            console.log(respuestaConsulta)
        }


    } catch (error) {
        error.message
    }
}

//Evento del botón
botonBuscar.addEventListener('click', () => {
    consulta()
})