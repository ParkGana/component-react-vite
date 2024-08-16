import React from 'react'
import { useCheckBox } from './check-box.hook'
import { CheckBoxStyle } from './check-box.style'

export function CheckBox({
    checked,
    options,
    checkCallback
}: {
    checked: string[]
    options: Array<string[]>
    checkCallback: (value: string[]) => void
}) {
    const { events } = useCheckBox(checked, checkCallback)

    return (
        <CheckBoxStyle.Container>
            {options.map((option, index) => (
                <CheckBoxStyle.SafetyContainer key={index}>
                    <CheckBoxStyle.Input
                        type="checkbox"
                        id={option[0]}
                        name="checkbox"
                        value={option[1]}
                        onClick={() => events.onCheckOption(option[1])}
                    />
                    <CheckBoxStyle.Box htmlFor={option[0]}></CheckBoxStyle.Box>
                    <CheckBoxStyle.Text htmlFor={option[0]}>{option[1]}</CheckBoxStyle.Text>
                </CheckBoxStyle.SafetyContainer>
            ))}
        </CheckBoxStyle.Container>
    )
}
