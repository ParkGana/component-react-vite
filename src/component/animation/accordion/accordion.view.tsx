import { useAccordionHorizontal, useAccordionVertical } from './accordion.hook'
import {
    HorizontalContainer,
    HorizontalContentsContainer,
    HorizontalContentsText,
    HorizontalSafetyContainer,
    HorizontalTitle,
    VerticalContainer,
    VerticalContentsContainer,
    VerticalContentsText,
    VerticalSafetyContainer,
    VerticalTitle
} from './accordion.style'

export function AccordionHorizontal() {
    const { ref, event } = useAccordionHorizontal()

    return (
        <HorizontalContainer ref={ref.containerRef}>
            {[...Array(2)].map((_, index) => (
                <HorizontalSafetyContainer
                    key={index}
                    onMouseEnter={() => event.onEnterItem(index)}
                    onMouseLeave={() => event.onLeaveItem(index)}
                >
                    <HorizontalTitle>Lorem</HorizontalTitle>
                    <HorizontalContentsContainer
                        ref={(element) => {
                            ref.contentsRef.current[index] = element!
                        }}
                    >
                        <HorizontalContentsText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </HorizontalContentsText>
                    </HorizontalContentsContainer>
                </HorizontalSafetyContainer>
            ))}
        </HorizontalContainer>
    )
}

export function AccordionVertical() {
    const { ref, event } = useAccordionVertical()

    return (
        <VerticalContainer>
            {[...Array(2)].map((_, index) => (
                <VerticalSafetyContainer
                    key={index}
                    onMouseEnter={() => event.onEnterItem(index)}
                    onMouseLeave={() => event.onLeaveItem(index)}
                >
                    <VerticalTitle>Lorem</VerticalTitle>
                    <VerticalContentsContainer
                        ref={(element) => {
                            ref.contentsRef.current[index] = element!
                        }}
                    >
                        <VerticalContentsText
                            ref={(element) => {
                                ref.textRef.current[index] = element!
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </VerticalContentsText>
                    </VerticalContentsContainer>
                </VerticalSafetyContainer>
            ))}
        </VerticalContainer>
    )
}
