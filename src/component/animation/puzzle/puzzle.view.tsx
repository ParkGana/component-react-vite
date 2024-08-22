import { usePuzzle } from './puzzle.hook'
import { Container, Piece } from './puzzle.style'

export function Puzzle({ pieces }: { pieces: string[] }) {
    const { event } = usePuzzle()

    return (
        <Container>
            {pieces.map((piece, index) => (
                <Piece
                    key={index}
                    id={`puzzle-${index + 1}`}
                    src={`/image/${piece}.png`}
                    onDragStart={(e) => event.onDragItem(e)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => event.onDropItem(e)}
                    alt="image"
                />
            ))}
        </Container>
    )
}
