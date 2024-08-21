import { BarChart } from "../../component/chart/bar/bar-chart.view";
import { DoughnutChart } from "../../component/chart/doughnut/doughnut-chart.view";
import { LineChart } from "../../component/chart/line/line-chart.view";
import { PieChart } from "../../component/chart/pie/pie-chart.view";
import { PolarChart } from "../../component/chart/polar/polar-chart.view";
import { RadarChart } from "../../component/chart/radar/radar-chart.view";
import { Category } from "../../component/common/category/category.view";
import { Item } from "../../component/common/item/item.view";

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

            <Item title={'POLAR'}>
                <PolarChart />
            </Item>

            <Item title={'RADAR'}>
                <RadarChart />
            </Item>
        </Category>
    )
}
