export const ChartData = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [70, 50, 87],
            backgroundColor: ['rgba(255, 0, 0, 0.3)', 'rgba(0, 255, 0, 0.3)', 'rgba(0, 0, 255, 0.3)']
        }
    ]
}

export const ChartOptions = {
    responsive: true,
    scales: {
        r: {
            beginAtZero: true,
            max: 100,
            ticks: {
                display: false,
                stepSize: 20
            },
            grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)',
                lineWidth: 1
            }
        }
    },
    plugins: {
        title: {
            display: false,
            text: 'Polar Chart Title'
        },
        legend: {
            display: false,
            position: 'top' as const
        }
    }
}
