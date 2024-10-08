import { AccordionHorizontal, AccordionVertical } from '../../component/animation/accordion/accordion.view'
import { FollowCursor } from '../../component/animation/follow-cursor/follow-cursor.view'
import { Puzzle } from '../../component/animation/puzzle/puzzle.view'
import { SwitchSection } from '../../component/animation/switch-section/switch-section.view'
import { Category } from '../../component/common/category/category.view'
import { Item } from '../../component/common/item/item.view'
import { PuzzleData } from './animation.data'

export function AnimationSection() {
    return (
        <Category title={'ANIMATION'}>
            <Item title={'ACCORDION (H)'}>
                <AccordionHorizontal />
            </Item>
            <Item title={'ACCORDION (V)'}>
                <AccordionVertical />
            </Item>
            <Item title={'FOLLOW CURSOR'}>
                <FollowCursor />
            </Item>
            <Item title={'PUZZLE'}>
                <Puzzle pieces={PuzzleData} />
            </Item>
            <Item title={'SWITCH SECTION'}>
                <SwitchSection />
            </Item>
        </Category>
    )
}
