import { Container } from './button.style'

export function Button({ clickCallback }: { clickCallback: () => void }) {
    return <Container onClick={clickCallback}>확인</Container>
}
