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
    const { state, ref, event } = useSelectBox(selectCallback)

    return (
        <SelectBoxStyle.Container ref={ref.ref} onClick={event.onToggleSelect}>
            <SelectBoxStyle.Selected>{selected}</SelectBoxStyle.Selected>
            <SelectBoxStyle.Arrow src={`/icons/select-${state.isOpen ? 'up' : 'down'}.png`} alt="icon" />
            <SelectBoxStyle.Option.Container isOpen={state.isOpen}>
                {options.map((option, index) => (
                    <SelectBoxStyle.Option.SafetyContainer
                        key={index}
                        isSelected={selected === option}
                        onClick={() => event.onSelectOption(option)}
                    >
                        {option}
                    </SelectBoxStyle.Option.SafetyContainer>
                ))}
            </SelectBoxStyle.Option.Container>
        </SelectBoxStyle.Container>
    )
}
