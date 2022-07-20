try{

    async function getNombreUf() {
        const resMonedas = await fetch("https://mindicador.cl/api")
        const dataMonedas = await resMonedas.json()
        const monedas = document.querySelector('#nombreUf')
        monedas.innerHTML = dataMonedas.uf['nombre']
    }
    getNombreUf()

    async function getValorUf() {
        const resMonedas = await fetch("https://mindicador.cl/api")
        const dataMonedas = await resMonedas.json()
        const monedas = document.querySelector('#valorUf')
        monedas.innerHTML = dataMonedas.uf['valor']
    }
    getValorUf()

    /* ESTO NO FUNCIONA 

    async function getListaMonedas() {
        const resMonedas = await fetch("https://mindicador.cl/api")
        const dataMonedas = await resMonedas.json()
        const monedas = document.querySelector('.listaMonedas')
        monedas.innerHTML = dataMonedas.['codigo']
    }
    getListaMonedas()

    La respuesta puede estar en: https://youtu.be/2Xm9P_tXtK8 
    También revisar: https://youtu.be/rKK1q7nFt7M 

    Aunque parece que la respuesta definitiva está en: https://es.stackoverflow.com/questions/231464/mostrar-datos-en-consola 
    */



} catch (e) {
    console.log(e.message)
}