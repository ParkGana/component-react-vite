import { DragEvent, useState } from 'react'

export function usePuzzle() {
    const [moveId, setMoveId] = useState<string>('')
    const [moveSrc, setMoveSrc] = useState<string>('')

    /* drag 이벤트 */
    const onDragItem = (e: DragEvent<HTMLImageElement>) => {
        setMoveId(e.currentTarget.id)
        setMoveSrc(e.currentTarget.src)
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
