export function useRadio(choiceCallback: (value: string) => void) {
    /* RADIO 선택 이벤트 */
    const onChoiceOption = (value: string) => {
        choiceCallback(value)
    }

    return {
        events: {
            onChoiceOption
        }
    }
}
