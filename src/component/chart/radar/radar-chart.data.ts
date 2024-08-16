export const ChartData = {
    labels: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ'],
    datasets: [
        {
            label: 'A',
            data: [50, 70, 55, 78, 60],
            fill: true,
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            pointBackgroundColor: 'rgba(255, 0, 0, 0.3)',
            borderColor: 'rgba(255, 0, 0, 0.3)',
            borderWidth: 2
        },
        {
            label: 'B',
            data: [70, 40, 70, 78, 45],
            fill: true,
            backgroundColor: 'rgba(0, 0, 255, 0.3)',
            pointBackgroundColor: 'rgba(0, 0, 255, 0.3)',
            borderColor: 'rgba(0, 0, 255, 0.3)',
            borderWidth: 2
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
            text: 'Radar Chart Title'
        },
        legend: {
            display: false,
            position: 'top' as const
        }
    }
}
