export function useCheckBox(checked: string[], checkCallback: (value: string[]) => void) {
    /* CHECK BOX 선택 이벤트 */
    const onCheckOption = (value: string) => {
        let arr = checked

        if (arr.includes(value)) {
            arr = arr.filter((item) => item !== value)
        } else {
            arr.push(value)
        }

        checkCallback(arr)
    }

    return {
        event: {
            onCheckOption
        }
    }
}
