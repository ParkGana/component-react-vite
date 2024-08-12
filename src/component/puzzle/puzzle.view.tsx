import { usePuzzle } from './puzzle.hook'
import { PuzzleStyle } from './puzzle.style'

export function Puzzle({ pieces }: { pieces: string[] }) {
    const { events } = usePuzzle()

    return (
        <PuzzleStyle.Container>
            {pieces.map((piece, index) => (
                <PuzzleStyle.Piece
                    key={index}
                    id={`puzzle-${index + 1}`}
                    src={`/images/${piece}.png`}
                    onDragStart={(e) => events.onDragItem(e)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => events.onDropItem(e)}
                    alt="image"
                />
            ))}
        </PuzzleStyle.Container>
    )
}
