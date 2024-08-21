import { useState } from 'react'
import { ListData } from './element.data'

export function useElement() {
    /* BUTTON 클릭 이벤트 */
    const onClickButton = () => {
        window.alert('버튼이 클릭되었습니다.')
    }

    /****************************************************************************************************/

    const [checked, setChecked] = useState<string[]>([])

    /* CHECK BOX 선택 이벤트 */
    const onCheckOption = (value: string[]) => {
        setChecked(value)
    }

    /****************************************************************************************************/

    const [nowPage, setNowPage] = useState<number>(1)
    const [nowGroup, setNowGroup] = useState<number>(1)

    const postCount = 2
    const pageCount = 5
    const totalPage = Math.ceil(ListData.length / postCount)

    /* 페이지 변경 이벤트 */
    const onChangePage = (value: number) => {
        setNowPage(value)

        if (nowPage < (nowGroup - 1) * pageCount + 1) {
            setNowGroup(nowGroup - 1)
        }

        if (nowPage > nowGroup * pageCount) {
            setNowGroup(nowGroup + 1)
        }
    }

    /* 페이지 그룹 변경 이벤트 */
    const onChangeGroup = (value: number) => {
        setNowGroup(value)
    }

    /****************************************************************************************************/

    const [choiced, setChoiced] = useState<string>()

    /* Radio 선택 이벤트 */
    const onChoiceOption = (value: string) => {
        setChoiced(value)
    }

    /****************************************************************************************************/

    const [keyword, setKeyword] = useState<string>('')

    /* SEARCH 값 변경 이벤트 */
    const onChangeKeyword = (value: string) => {
        setKeyword(value)
    }

    /****************************************************************************************************/

    const [selected, setSelected] = useState<string>('응원하는 구단을 선택해 주세요.')

    /* SELECT BOX 선택 이벤트 */
    const onSelectOption = (value: string) => {
        setSelected(value)
    }

    return {
        state: {
            checked,
            postCount,
            pageCount,
            totalPage,
            nowPage,
            nowGroup,
            choiced,
            keyword,
            selected
        },
        event: {
            onClickButton,
            onCheckOption,
            onChangePage,
            onChangeGroup,
            onChoiceOption,
            onChangeKeyword,
            onSelectOption
        }
    }
}
