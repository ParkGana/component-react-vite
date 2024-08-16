import { useEffect, useRef } from 'react'

export function useSwitchSection(page: number) {
    const now = useRef<number>(0)
    const isWheel = useRef<boolean>(true)

    useEffect(() => {
        const container = document.getElementById('switch-section-container')
        const pageList = <NodeListOf<HTMLDivElement>>document.querySelectorAll('.switch-section-page')

        /* 마우스 휠 이벤트 */
        if (container && pageList) {
            pageList.forEach((item) => {
                item.addEventListener(
                    'wheel',
                    (e) => {
                        e.preventDefault()
                        if (isWheel.current) {
                            isWheel.current = false

                            if (e.deltaY > 0) now.current++
                            else if (e.deltaY < 0) now.current--

                            if (now.current < 0) now.current = 0
                            else if (now.current > page - 1) now.current = page - 1

                            container.style.top = now.current * -200 + 'px'

                            setTimeout(() => {
                                isWheel.current = true
                            }, 500)
                        }
                    },
                    { passive: false }
                )
            })
        }
    }, [page])
}
