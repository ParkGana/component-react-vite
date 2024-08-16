import { Radar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, RadialLinearScale, Legend, Title, Filler } from 'chart.js'
import { ChartData, ChartOptions } from './radar-chart.data'

Chart.register(CategoryScale, LinearScale, RadialLinearScale, Title, Legend, Filler)

export function RadarChart() {
    return <Radar width={280} height={280} data={ChartData} options={ChartOptions} />
}
