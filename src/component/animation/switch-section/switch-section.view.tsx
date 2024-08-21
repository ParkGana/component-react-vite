import { useSwitchSection } from './switch-section.hook'
import { Container, SafetyContainer, Section } from './switch-section.style'

export function SwitchSection() {
    useSwitchSection(5)

    return (
        <Container>
            <SafetyContainer id="switch-section-container">
                {[...Array(5)].map((_, index) => (
                    <Section key={index} className="switch-section-page">
                        {index + 1}
                    </Section>
                ))}
            </SafetyContainer>
        </Container>
    )
}
