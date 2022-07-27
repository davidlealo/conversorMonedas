//var xValues = [60,70,80,90,100,110,120,130,140,150];
//var yValues = [7,8,8,9,9,9,10,11,14,14];


const consulta = async () => {
    try {
    
        //Invocar la api con el tipo de moneda
        res = await fetch(`https://mindicador.cl/api/dolar`);
        data = await res.json();
        
        
        let yValues = [
            data['serie'][9]['valor'],
            data['serie'][8]['valor'],
            data['serie'][7]['valor'],
            data['serie'][6]['valor'],
            data['serie'][5]['valor'],
            data['serie'][4]['valor'],
            data['serie'][3]['valor'],
            data['serie'][2]['valor'],
            data['serie'][1]['valor'],
            data['serie'][0]['valor']
        ];

        let xValues = [
            new Date(data['serie'][9]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"}),
            new Date(data['serie'][8]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"}),
            new Date(data['serie'][7]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"}),
            new Date(data['serie'][6]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"}),
            new Date(data['serie'][5]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"}),
            new Date(data['serie'][4]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"}),
            new Date(data['serie'][3]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"}),
            new Date(data['serie'][2]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"}),
            new Date(data['serie'][1]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"}),
            new Date(data['serie'][0]['fecha']).toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"})
    ];

   

        new Chart("myChart", {
            type: "line",
            data: {
              labels: xValues,
              datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
              }]
            },
            options: {
              legend: {display: false},
              scales: {
                yAxes: [{ticks: {min: 6, max:16}}],
              }
            }
          });


    } catch (error) {
        error.message
    }
}

consulta()
console.log(new Date().toLocaleDateString('es-es', {day:"numeric", month:"short", year:"numeric"})) 
// "Friday, Jul 2, 2021"

