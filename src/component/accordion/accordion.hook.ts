import { useRef } from 'react'

export function useAccordionHorizontal() {
    const containerRef = useRef<HTMLDivElement>(null)
    const contentsRef = useRef<HTMLDivElement[]>([])

    /* 마우스 enter 이벤트 */
    const onEnterItem = (index: number) => {
        const one = index === 0 ? '1fr' : 'fit-content(300px)'
        const two = index === 1 ? '1fr' : 'fit-content(300px)'

        if (containerRef.current !== null && contentsRef.current !== null) {
            containerRef.current.style.gridTemplateColumns = `${one} ${two}`
            contentsRef.current[index].style.display = 'block'
        }
    }

    /* 마우스 leave 이벤트 */
    const onLeaveItem = (index: number) => {
        if (containerRef.current !== null && contentsRef.current !== null) {
            containerRef.current.style.gridTemplateColumns = 'repeat(2, 1fr)'
            contentsRef.current[index].style.display = 'none'
        }
    }

    return {
        states: {
            containerRef,
            contentsRef
        },
        events: {
            onEnterItem,
            onLeaveItem
        }
    }
}

export function useAccordionVertical() {
    const contentsRef = useRef<HTMLDivElement[]>([])
    const textRef = useRef<HTMLDivElement[]>([])

    /* 마우스 enter 이벤트 */
    const onEnterItem = (index: number) => {
        if (contentsRef.current !== null && textRef.current !== null) {
            contentsRef.current[index].style.height = `${textRef.current[index].clientHeight}px`
        }
    }

    /* 마우스 leave 이벤트 */
    const onLeaveItem = (index: number) => {
        if (contentsRef.current !== null && textRef.current !== null) {
            contentsRef.current[index].style.height = '0'
        }
    }

    return {
        states: {
            contentsRef,
            textRef
        },
        events: {
            onEnterItem,
            onLeaveItem
        }
    }
}
