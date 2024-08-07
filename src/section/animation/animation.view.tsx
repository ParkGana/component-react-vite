import { Category } from '@/src/component/common/category/category.view'
import { Item } from '@/src/component/common/item/item.view'
import { FollowCursor } from '@/src/component/follow-cursor/follow-cursor.view'

export function AnimationSection() {
    return (
        <Category title={'ANIMATION'}>
            <Item title={'FOLLOW CURSOR'}>
                <FollowCursor />
            </Item>
        </Category>
    )
}
