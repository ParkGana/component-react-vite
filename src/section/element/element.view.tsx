import { Category } from '@/src/component/common/category/category.view'
import { useElement } from './element.hook'
import { Button } from '@/src/component/button/button.view'
import { Item } from '@/src/component/common/item/item.view'
import { SelectBox } from '@/src/component/select-box/select-box.view'
import { CheckBox } from '@/src/component/check-box/check-box.view'

export function ElementSection() {
    const { state, event } = useElement()

    return (
        <Category title={'ELEMENT'}>
            <Item title={'BUTTON'}>
                <Button clickCallback={event.onClickButton} />
            </Item>

            <Item title={'CHECK BOX'}>
                <CheckBox
                    checked={state.checked}
                    options={[
                        ['check-1', '글램핑'],
                        ['check-2', '오토'],
                        ['check-3', '카라반']
                    ]}
                    checkCallback={event.onCheckOption}
                />
            </Item>

            <Item title={'SELECT BOX'}>
                <SelectBox
                    selected={state.selected}
                    options={[
                        '기아 타이거즈',
                        '두산 베어스',
                        '롯데 자이언츠',
                        '삼성 라이온즈',
                        '키움 히어로즈',
                        '한화 이글스',
                        'KT 위즈',
                        'LG 트윈스',
                        'NC 다이노스',
                        'SSG 랜더스'
                    ]}
                    selectCallback={event.onSelectOption}
                />
            </Item>
        </Category>
    )
}
