import { useSwitchSection } from './switch-section.hook'
import { SwitchSectionStyle } from './switch-section.style'

export function SwitchSection() {
    useSwitchSection(5)

    return (
        <SwitchSectionStyle.Container>
            <SwitchSectionStyle.SafetyContainer id="switch-section-container">
                {[...Array(5)].map((num, index) => (
                    <SwitchSectionStyle.Section key={index} className="switch-section-page">
                        {index + 1}
                    </SwitchSectionStyle.Section>
                ))}
            </SwitchSectionStyle.SafetyContainer>
        </SwitchSectionStyle.Container>
    )
}
