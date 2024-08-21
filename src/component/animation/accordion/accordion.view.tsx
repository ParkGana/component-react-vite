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
    const { refs, events } = useAccordionHorizontal()

    return (
        <HorizontalContainer ref={refs.containerRef}>
            {[...Array(2)].map((_, index) => (
                <HorizontalSafetyContainer
                    key={index}
                    onMouseEnter={() => events.onEnterItem(index)}
                    onMouseLeave={() => events.onLeaveItem(index)}
                >
                    <HorizontalTitle>Lorem</HorizontalTitle>
                    <HorizontalContentsContainer
                        ref={(element) => {
                            refs.contentsRef.current[index] = element!
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
    const { refs, events } = useAccordionVertical()

    return (
        <VerticalContainer>
            {[...Array(2)].map((_, index) => (
                <VerticalSafetyContainer
                    key={index}
                    onMouseEnter={() => events.onEnterItem(index)}
                    onMouseLeave={() => events.onLeaveItem(index)}
                >
                    <VerticalTitle>Lorem</VerticalTitle>
                    <VerticalContentsContainer
                        ref={(element) => {
                            refs.contentsRef.current[index] = element!
                        }}
                    >
                        <VerticalContentsText
                            ref={(element) => {
                                refs.textRef.current[index] = element!
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
