import { ButtonStyle } from './button.style'

export function Button({ clickCallback }: { clickCallback: () => void }) {
    return <ButtonStyle.Container onClick={clickCallback}>확인</ButtonStyle.Container>
}
