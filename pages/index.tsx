import { AnimationSection } from '@/src/section/animation/animation.view'
import { ElementSection } from '@/src/section/element/element.view'
import React from 'react'

export default function Page() {
    return (
        <div style={{ display: 'grid', gap: '100px', padding: '30px' }}>
            <ElementSection />
            <AnimationSection />
        </div>
    )
}
