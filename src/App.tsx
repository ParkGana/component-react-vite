import { useEffect } from 'react'
import './App.css'
import './configuration/font.css'
import { AnimationSection } from './section/animation/animation.view'
import { ChartSection } from './section/chart/chart.view'
import { ElementSection } from './section/element/element.view'

function App() {
    useEffect(() => {
        // manual : 새로고침 시 화면 최상단으로 이동
        // auto : 새로고침 시 위치 유지
        history.scrollRestoration = 'manual'
    }, [])

    return (
        <div style={{ display: 'grid', gap: '100px', padding: '30px' }}>
            <ElementSection />
            <AnimationSection />
            <ChartSection />
        </div>
    )
}

export default App
