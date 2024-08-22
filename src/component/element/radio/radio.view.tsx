import { useRadio } from './radio.hook'
import { Container, Input, SafetyContainer, Text } from './radio.style'

export function Radio({
    options,
    choiceCallback
}: {
    options: Array<string[]>
    choiceCallback: (value: string) => void
}) {
    const { event } = useRadio(choiceCallback)

    return (
        <Container>
            {options.map((option, index) => (
                <SafetyContainer key={index}>
                    <Input
                        type="radio"
                        id={option[0]}
                        name="radio"
                        value={option[1]}
                        onClick={() => event.onChoiceOption(option[1])}
                    />
                    <Text htmlFor={option[0]}>{option[1]}</Text>
                </SafetyContainer>
            ))}
        </Container>
    )
}
