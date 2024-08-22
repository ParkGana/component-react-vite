import { useElement } from './element.hook'
import { CheckBoxData, ListData, RadioData, SelectBoxData } from './element.data'
import { Category } from '../../component/common/category/category.view'
import { Item } from '../../component/common/item/item.view'
import { Button } from '../../component/element/button/button.view'
import { CheckBox } from '../../component/element/check-box/check-box.view'
import { List } from '../../component/element/pagination/list/list.view'
import { Pagination } from '../../component/element/pagination/pagination.view'
import { Radio } from '../../component/element/radio/radio.view'
import { Search } from '../../component/element/search/search.view'
import { SelectBox } from '../../component/element/select-box/select-box.view'

export function ElementSection() {
    const { state, event } = useElement()

    return (
        <Category title={'ELEMENT'}>
            <Item title={'BUTTON'}>
                <Button clickCallback={event.onClickButton} />
            </Item>

            <Item title={'CHECK BOX'}>
                <CheckBox checked={state.checked} options={CheckBoxData} checkCallback={event.onCheckOption} />
            </Item>

            <Item title={'PAGINATION'}>
                <List postList={ListData} postCount={state.postCount} nowPage={state.nowPage} />
                <Pagination
                    pageCount={state.pageCount}
                    totalPage={state.totalPage}
                    nowPage={state.nowPage}
                    nowGroup={state.nowGroup}
                    clickCallback={event.onChangePage}
                    changeCallback={event.onChangeGroup}
                />
            </Item>

            <Item title={'RADIO'}>
                <Radio options={RadioData} choiceCallback={event.onChoiceOption} />
            </Item>

            <Item title={'SEARCH'}>
                <Search keyword={state.keyword} changeCallback={event.onChangeKeyword} />
            </Item>

            <Item title={'SELECT BOX'}>
                <SelectBox selected={state.selected} options={SelectBoxData} selectCallback={event.onSelectOption} />
            </Item>
        </Category>
    )
}
