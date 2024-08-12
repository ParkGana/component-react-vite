import { DragEvent } from 'react'

export function usePuzzle() {
    let moveId: string
    let moveSrc: string

    /* drag 이벤트 */
    const onDragItem = (e: DragEvent<HTMLImageElement>) => {
        moveId = e.currentTarget.id
        moveSrc = e.currentTarget.src
    }

    /* drop 이벤트 */
    const onDropItem = (e: DragEvent<HTMLImageElement>) => {
        const movePiece = <HTMLImageElement>document.getElementById(moveId)
        const changePiece = <HTMLImageElement>document.getElementById(e.currentTarget.id)

        movePiece.src = e.currentTarget.src
        changePiece.src = moveSrc
    }

    return {
        events: {
            onDragItem,
            onDropItem
        }
    }
}
