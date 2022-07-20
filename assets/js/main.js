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



} catch (e) {
    console.log(e.message)
}