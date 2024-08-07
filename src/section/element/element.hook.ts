import { useState } from 'react'

export function useElement() {
    /* BUTTON 클릭 이벤트 */
    const onClickButton = () => {
        window.alert('버튼이 클릭되었습니다.')
    }

    /****************************************************************************************************/

    const [selected, setSelected] = useState<string>('응원하는 구단을 선택해 주세요.')

    /* SELECT BOX 선택 이벤트 */
    const onSelectOption = (value: string) => {
        setSelected(value)
    }

    return {
        state: {
            selected
        },
        event: {
            onClickButton,
            onSelectOption
        }
    }
}
