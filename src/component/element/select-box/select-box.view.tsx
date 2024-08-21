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
    const { states, refs, events } = useSelectBox(selectCallback)

    return (
        <Container ref={refs.ref} onClick={events.onToggleSelect}>
            <Selected>{selected}</Selected>
            <Arrow src={`/icon/select-${states.isOpen ? 'up' : 'down'}.png`} alt="icon" />
            <OptionContainer isOpen={states.isOpen}>
                {options.map((option, index) => (
                    <OptionSafetyContainer
                        key={index}
                        isSelected={selected === option}
                        onClick={() => events.onSelectOption(option)}
                    >
                        {option}
                    </OptionSafetyContainer>
                ))}
            </OptionContainer>
        </Container>
    )
}
