import { AnimationSection } from '@/src/section/animation/animation.view'
import { ChartSection } from '@/src/section/chart/chart.view'
import { ElementSection } from '@/src/section/element/element.view'
import React, { useEffect } from 'react'

export default function Page() {
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
