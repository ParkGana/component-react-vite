import { Category } from '@/src/component/common/category/category.view'
import { useElement } from './element.hook'
import { Button } from '@/src/component/button/button.view'
import { Item } from '@/src/component/common/item/item.view'

export function ElementSection() {
    const { event } = useElement()

    return (
        <Category title={'ELEMENT'}>
            <Item title={'BUTTON'}>
                <Button clickCallback={event.onClickButton} />
            </Item>
        </Category>
    )
}
