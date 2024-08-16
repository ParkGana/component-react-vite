import { BarChart } from '@/src/component/chart/bar/bar-chart.view'
import { Category } from '@/src/component/common/category/category.view'
import { Item } from '@/src/component/common/item/item.view'

export function ChartSection() {
    return (
        <Category title={'CHART'}>
            <Item title={'BAR'}>
                <BarChart />
            </Item>
        </Category>
    )
}
