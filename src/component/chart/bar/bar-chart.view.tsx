import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement, Legend, Title } from 'chart.js'
import { ChartData, ChartOptions } from './bar-chart.data'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Legend)

export function BarChart() {
    return <Bar width={280} height={280} data={ChartData} options={ChartOptions} />
}
