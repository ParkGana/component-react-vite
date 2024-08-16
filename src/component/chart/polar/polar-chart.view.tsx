import { PolarArea } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, Legend, Title } from 'chart.js'
import { ChartData, ChartOptions } from './polar-chart.data'

Chart.register(CategoryScale, LinearScale, Title, Legend)

export function PolarChart() {
    return <PolarArea width={280} height={280} data={ChartData} options={ChartOptions} />
}
