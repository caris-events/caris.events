let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2019 Q4', '2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4', '2021 Q1', '2021 Q2', '2021 Q3', '2021 Q4', '2022 Q1'],
        datasets: [{
            data: [0, 0, -7],
            backgroundColor: 'transparent',
            borderColor: '#333',
            lineTension: 0,
        }]
    },
    options: {
        layout: {
            padding: {
                left: 20,
                right: 50,
                top: 30,
                bottom: 10
            }
        },
        legend: {
            display: false,
        },
        animation: {
            duration: 0,
        },
        tooltips: {
            enabled: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMin: -50,
                    suggestedMax: 50,
                    padding: 20,
                    fontColor: '#777',
                    //display: false,
                },
                gridLines: {
                    //display: false,
                    drawTicks: false,
                    color: '#EEE',
                    zeroLineColor: '#CCC',
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 20,
                    fontColor: '#777',
                    //display: false,
                },
                gridLines: {
                    //display: false,
                    drawTicks: false,
                    color: '#EEE',
                }
            }]
        }
    }
});