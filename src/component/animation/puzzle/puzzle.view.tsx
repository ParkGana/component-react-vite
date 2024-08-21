import { usePuzzle } from './puzzle.hook'
import { Container, Piece } from './puzzle.style'

export function Puzzle({ pieces }: { pieces: string[] }) {
    const { events } = usePuzzle()

    return (
        <Container>
            {pieces.map((piece, index) => (
                <Piece
                    key={index}
                    id={`puzzle-${index + 1}`}
                    src={`/image/${piece}.png`}
                    onDragStart={(e) => events.onDragItem(e)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => events.onDropItem(e)}
                    alt="image"
                />
            ))}
        </Container>
    )
}
