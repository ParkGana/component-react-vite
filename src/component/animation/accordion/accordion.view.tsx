import { useAccordionHorizontal, useAccordionVertical } from './accordion.hook'
import { AccordionStyle } from './accordion.style'

export function AccordionHorizontal() {
    const { refs, events } = useAccordionHorizontal()

    return (
        <AccordionStyle.Horizontal.Container ref={refs.containerRef}>
            {[...Array(2)].map((number, index) => (
                <AccordionStyle.Horizontal.SafetyContainer
                    key={index}
                    onMouseEnter={() => events.onEnterItem(index)}
                    onMouseLeave={() => events.onLeaveItem(index)}
                >
                    <AccordionStyle.Horizontal.Title>Lorem</AccordionStyle.Horizontal.Title>
                    <AccordionStyle.Horizontal.Contents.Container
                        ref={(element) => {
                            refs.contentsRef.current[index] = element!
                        }}
                    >
                        <AccordionStyle.Horizontal.Contents.Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </AccordionStyle.Horizontal.Contents.Text>
                    </AccordionStyle.Horizontal.Contents.Container>
                </AccordionStyle.Horizontal.SafetyContainer>
            ))}
        </AccordionStyle.Horizontal.Container>
    )
}

export function AccordionVertical() {
    const { refs, events } = useAccordionVertical()

    return (
        <AccordionStyle.Vertical.Container>
            {[...Array(2)].map((number, index) => (
                <AccordionStyle.Vertical.SafetyContainer
                    key={index}
                    onMouseEnter={() => events.onEnterItem(index)}
                    onMouseLeave={() => events.onLeaveItem(index)}
                >
                    <AccordionStyle.Vertical.Title>Lorem</AccordionStyle.Vertical.Title>
                    <AccordionStyle.Vertical.Contents.Container
                        ref={(element) => {
                            refs.contentsRef.current[index] = element!
                        }}
                    >
                        <AccordionStyle.Vertical.Contents.Text
                            ref={(element) => {
                                refs.textRef.current[index] = element!
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </AccordionStyle.Vertical.Contents.Text>
                    </AccordionStyle.Vertical.Contents.Container>
                </AccordionStyle.Vertical.SafetyContainer>
            ))}
        </AccordionStyle.Vertical.Container>
    )
}
