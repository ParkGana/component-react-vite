import { Pie } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, Legend, Title, ArcElement } from 'chart.js'
import { ChartData, ChartOptions } from './pie-chart.data'

Chart.register(CategoryScale, LinearScale, ArcElement, Title, Legend)

export function PieChart() {
    return <Pie width={280} height={280} data={ChartData} options={ChartOptions} />
}
