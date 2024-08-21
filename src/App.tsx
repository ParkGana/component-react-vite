import './App.css'
import './configuration/font.css'
import { AnimationSection } from './section/animation/animation.view'
import { ChartSection } from './section/chart/chart.view'
import { ElementSection } from './section/element/element.view'

function App() {
    return (
        <div style={{ display: 'grid', gap: '100px', padding: '30px' }}>
            <ElementSection />
            <AnimationSection />
            <ChartSection />
        </div>
    )
}

export default App
