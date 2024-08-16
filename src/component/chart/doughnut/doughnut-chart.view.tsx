import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, CategoryScale, LinearScale, Legend, Title } from 'chart.js'
import { ChartData, ChartOptions } from './doughnut-chart.data'

Chart.register(ArcElement, CategoryScale, LinearScale, Title, Legend)

export function DoughnutChart() {
    return <Doughnut width={280} height={280} data={ChartData} options={ChartOptions} />
}
