import { BarChart } from '@/src/component/chart/bar/bar-chart.view'
import { DoughnutChart } from '@/src/component/chart/doughnut/doughnut-chart.view'
import { LineChart } from '@/src/component/chart/line/line-chart.view'
import { PieChart } from '@/src/component/chart/pie/pie-chart.view'
import { RadarChart } from '@/src/component/chart/radar/radar-chart.view'
import { Category } from '@/src/component/common/category/category.view'
import { Item } from '@/src/component/common/item/item.view'

export function ChartSection() {
    return (
        <Category title={'CHART'}>
            <Item title={'BAR'}>
                <BarChart />
            </Item>

            <Item title={'DOUGHNUT'}>
                <DoughnutChart />
            </Item>

            <Item title={'LINE'}>
                <LineChart />
            </Item>

            <Item title={'PIE'}>
                <PieChart />
            </Item>

            <Item title={'RADAR'}>
                <RadarChart />
            </Item>
        </Category>
    )
}
