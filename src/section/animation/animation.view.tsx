import { AccordionHorizontal, AccordionVertical } from '@/src/component/accordion/accordion.view'
import { Category } from '@/src/component/common/category/category.view'
import { Item } from '@/src/component/common/item/item.view'
import { FollowCursor } from '@/src/component/follow-cursor/follow-cursor.view'
import { Puzzle } from '@/src/component/puzzle/puzzle.view'

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
                <Puzzle pieces={['puzzle-2', 'puzzle-4', 'puzzle-1', 'puzzle-3']} />
            </Item>
        </Category>
    )
}
