import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, Legend, Title, PointElement, LineElement } from 'chart.js'
import { ChartData, ChartOptions } from './line-chart.data'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend)

export function LineChart() {
    return <Line width={280} height={280} data={ChartData} options={ChartOptions} />
}
