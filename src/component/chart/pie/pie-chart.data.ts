export const ChartData = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [30, 17, 53],
            backgroundColor: ['rgba(255, 0, 0, 0.3)', 'rgba(0, 255, 0, 0.3)', 'rgba(0, 0, 255, 0.3)']
        }
    ]
}

export const ChartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: false,
            text: 'Pie Chart Title'
        },
        legend: {
            display: false,
            position: 'top' as const
        }
    }
}
