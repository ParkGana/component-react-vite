import React from 'react'
import { RadioStyle } from './radio.style'
import { useRadio } from './radio.hook'

export function Radio({
    options,
    choiceCallback
}: {
    options: Array<string[]>
    choiceCallback: (value: string) => void
}) {
    const { events } = useRadio(choiceCallback)

    return (
        <RadioStyle.Container>
            {options.map((option, index) => (
                <RadioStyle.SafetyContainer key={index}>
                    <RadioStyle.Input
                        type="radio"
                        id={option[0]}
                        name="radio"
                        value={option[1]}
                        onClick={() => events.onChoiceOption(option[1])}
                    />
                    <RadioStyle.Text htmlFor={option[0]}>{option[1]}</RadioStyle.Text>
                </RadioStyle.SafetyContainer>
            ))}
        </RadioStyle.Container>
    )
}
