import { useEffect } from 'react'

export function useFollowCursor() {
    useEffect(() => {
        const area = document.getElementById('follow-cursor-area')
        const circle = document.getElementById('follow-cursor-circle')

        let pageTop: number
        let pageLeft: number
        let areaTop: number
        let areaLeft: number

        if (area) {
            areaTop = area.getBoundingClientRect().top
            areaLeft = area.getBoundingClientRect().left

            /* 화면 크기 변경 이벤트 */
            window.addEventListener('resize', (e) => {
                areaTop = area.getBoundingClientRect().top
                areaLeft = area.getBoundingClientRect().left
            })

            /* 마우스 이동 이벤트 */
            document.addEventListener('mousemove', (e) => {
                pageTop = e.pageY
                pageLeft = e.pageX

                if (circle) {
                    setTimeout(() => {
                        circle.style.top = pageTop - areaTop - 25 + 'px'
                        circle.style.left = pageLeft - areaLeft - 25 + 'px'
                    }, 100)
                }
            })
        }
    }, [])
}
