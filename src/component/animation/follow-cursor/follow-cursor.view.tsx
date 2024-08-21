import { useFollowCursor } from './follow-cursor.hook'
import { Circle, Container } from './follow-cursor.style'

export function FollowCursor() {
    useFollowCursor()

    return (
        <Container id="follow-cursor-area">
            <Circle id="follow-cursor-circle" />
        </Container>
    )
}
