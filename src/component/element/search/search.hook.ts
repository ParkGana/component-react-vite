import { ChangeEvent, KeyboardEvent } from 'react'

export function useSearch(keyword: string, changeCallback: (value: string) => void) {
    /* 검색어 입력 이벤트 */
    const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        changeCallback(e.target.value)
    }

    /* Enter 키 이벤트 */
    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            window.alert(`'${keyword}' 입력되었습니다`)
        }
    }

    /* search 아이콘 클릭 이벤트 */
    const onClickButton = () => {
        window.alert(`'${keyword}' 입력되었습니다`)
    }

    return {
        event: {
            onChangeKeyword,
            onPressEnter,
            onClickButton
        }
    }
}
