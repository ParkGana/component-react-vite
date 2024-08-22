import { useCheckBox } from './check-box.hook'
import { Box, Container, Input, SafetyContainer, Text } from './check-box.style'

export function CheckBox({
    checked,
    options,
    checkCallback
}: {
    checked: string[]
    options: Array<string[]>
    checkCallback: (value: string[]) => void
}) {
    const { event } = useCheckBox(checked, checkCallback)

    return (
        <Container>
            {options.map((option, index) => (
                <SafetyContainer key={index}>
                    <Input
                        type="checkbox"
                        id={option[0]}
                        name="checkbox"
                        value={option[1]}
                        onClick={() => event.onCheckOption(option[1])}
                    />
                    <Box htmlFor={option[0]}></Box>
                    <Text htmlFor={option[0]}>{option[1]}</Text>
                </SafetyContainer>
            ))}
        </Container>
    )
}
