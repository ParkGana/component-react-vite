import { useEffect, useState } from 'react'

export function usePagination(
    pageCount: number,
    totalPage: number,
    nowPage: number,
    nowGroup: number,
    clickCallback: (value: number) => void,
    changeCallback: (value: number) => void
) {
    const [columnCount, setColumnCount] = useState<number>(0)

    useEffect(() => {
        onSetColumnCount(nowGroup)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /* prev 클릭 이벤트 */
    const onClickPrev = () => {
        console.log(columnCount)
        if (nowPage > 1) {
            clickCallback(nowPage - 1)

            if (nowPage - 1 < (nowGroup - 1) * pageCount + 1) {
                changeCallback(nowGroup - 1)
                onSetColumnCount(nowGroup - 1)
            }
        }
    }

    /* next 클릭 이벤트 */
    const onClickNext = () => {
        console.log(columnCount)
        if (nowPage < totalPage) {
            clickCallback(nowPage + 1)

            if (nowPage + 1 > nowGroup * pageCount) {
                changeCallback(nowGroup + 1)
                onSetColumnCount(nowGroup + 1)
            }
        }
    }

    /* 페이지 클릭 이벤트 */
    const onClickPage = (value: number) => {
        clickCallback(value)
    }

    /* column 개수 설정 이벤트 */
    const onSetColumnCount = (group: number) => {
        const pageList = document.querySelectorAll('.pagination-page')

        if (pageList.length > 0) {
            let count = 0

            pageList.forEach((_, index) => {
                if (index >= (group - 1) * pageCount && index <= group * pageCount - 1) {
                    count++
                }
            })

            setColumnCount(count)
        }
    }

    return {
        states: {
            columnCount
        },
        events: {
            onClickPrev,
            onClickNext,
            onClickPage
        }
    }
}
