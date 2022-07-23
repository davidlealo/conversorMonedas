try{
    //var getMoneda = document.querySelector('#valoresMonedas');
    //var getMoneda = document.querySelector('#dolar').value;
    var getMoneda = document.querySelector('option').value;
    console.log(getMoneda)
    console.log(typeof(getMoneda))

    //console.log(getMoneda)
    var getNombreMoneda = document.querySelector('#dolar').value['nombre']
    //console.log(getNombreMoneda)


    async function getMonedas(){
       // const res = await fetch("https://mindicador.cl/api/"+getMoneda.value)
        console.log(getMoneda)
        //const res = await fetch("https://mindicador.cl/api")
        //const data = await res.json()

       // let nombre = data.getMoneda['nombre']
        //let valor = data.getMoneda[0].innerHTML
        //const prueba = document.querySelector('#prueba')
        //prueba.innerHTML = data.getMoneda['nombre']
       // prueba.innerHTML = data.dolar['valor']


    }

    getMonedas()

    /*
    async function getNombreMoneda() {
        const resNombreMonedas = await fetch("https://mindicador.cl/api")
        const datanombreMonedas = await resNombreMonedas.json()
        const nombreMonedas = document.querySelector('#nombreUf')
        nombreMonedas.innerHTML = datanombreMonedas.uf['nombre']
    }
  

    async function getValorMoneda() {
        const resValorMonedas = await fetch("https://mindicador.cl/api")
        const dataValorMonedas = await resValorMonedas.json()
        const valorMonedas = document.querySelector('#valorUf')
        valorMonedas.innerHTML = dataValorMonedas.uf['valor']
    }
    -----------------
    async function getNombreUf() {
        const resMonedas = await fetch("https://mindicador.cl/api")
        const dataMonedas = await resMonedas.json()
        const monedas = document.querySelector('#nombreUf')
        monedas.innerHTML = dataMonedas.uf['nombre']
    }
    async function getNombreIvp() {
        const resMonedas = await fetch("https://mindicador.cl/api")
        const dataMonedas = await resMonedas.json()
        const monedas = document.querySelector('#nombreIvp')
        monedas.innerHTML = dataMonedas.ivp['nombre']
    }

    async function getValorUf() {
        const resMonedas = await fetch("https://mindicador.cl/api")
        const dataMonedas = await resMonedas.json()
        const monedas = document.querySelector('#valorUf')
        monedas.innerHTML = dataMonedas.uf['valor']
    }
    
    
    function getNombreMonedas(){
        getNombreUf()
    }
    
    function getValorMonedas(){
        getValorUf()
    }
    getNombreMonedas()
   */
    /*
    monedas = [uf, ivp, dolar, euro, utm]

    for (moneda of monedas){
        console.log(moneda)
        let listaMonedasImprimir = document.querySelector('.listaMonedasDesordenada')
        listaMonedasImprimir.innerHTML =+ `<li>${getNombreMoneda(moneda)}</li>`
    }*/

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