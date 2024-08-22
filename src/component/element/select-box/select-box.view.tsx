import { useSelectBox } from './select-box.hook'
import { Arrow, Container, OptionContainer, OptionSafetyContainer, Selected } from './select-box.style'

export function SelectBox({
    selected,
    options,
    selectCallback
}: {
    selected: string
    options: string[]
    selectCallback: (value: string) => void
}) {
    const { state, ref, event } = useSelectBox(selectCallback)

    return (
        <Container ref={ref.ref} onClick={event.onToggleSelect}>
            <Selected>{selected}</Selected>
            <Arrow src={`/icon/select-${state.isOpen ? 'up' : 'down'}.png`} alt="icon" />
            <OptionContainer isOpen={state.isOpen}>
                {options.map((option, index) => (
                    <OptionSafetyContainer
                        key={index}
                        isSelected={selected === option}
                        onClick={() => event.onSelectOption(option)}
                    >
                        {option}
                    </OptionSafetyContainer>
                ))}
            </OptionContainer>
        </Container>
    )
}
