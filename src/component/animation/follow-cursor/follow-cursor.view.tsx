import { useFollowCursor } from './follow-cursor.hook'
import { FollowCursorStyle } from './follow-cursor.style'

export function FollowCursor() {
    useFollowCursor()

    return (
        <FollowCursorStyle.Container id="follow-cursor-area">
            <FollowCursorStyle.Circle id="follow-cursor-circle" />
        </FollowCursorStyle.Container>
    )
}
