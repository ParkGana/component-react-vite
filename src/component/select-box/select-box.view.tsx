import { useSelectBox } from './select-box.hook'
import { SelectBoxStyle } from './select-box.style'

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
        <SelectBoxStyle.Container ref={refs.ref} onClick={events.onToggleSelect}>
            <SelectBoxStyle.Selected>{selected}</SelectBoxStyle.Selected>
            <SelectBoxStyle.Arrow src={`/icons/select-${states.isOpen ? 'up' : 'down'}.png`} alt="icon" />
            <SelectBoxStyle.Option.Container isOpen={states.isOpen}>
                {options.map((option, index) => (
                    <SelectBoxStyle.Option.SafetyContainer
                        key={index}
                        isSelected={selected === option}
                        onClick={() => events.onSelectOption(option)}
                    >
                        {option}
                    </SelectBoxStyle.Option.SafetyContainer>
                ))}
            </SelectBoxStyle.Option.Container>
        </SelectBoxStyle.Container>
    )
}
