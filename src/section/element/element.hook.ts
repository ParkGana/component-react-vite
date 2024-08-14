import { useState } from 'react'

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

    const [choiced, setChoiced] = useState<string>()

    /* Radio 선택 이벤트 */
    const onChoiceOption = (value: string) => {
        setChoiced(value)
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
            choiced,
            selected
        },
        event: {
            onClickButton,
            onCheckOption,
            onChoiceOption,
            onSelectOption
        }
    }
}
