export function useElement() {
    /* BUTTON 클릭 이벤트 */
    const onClickButton = () => {
        window.alert('버튼이 클릭되었습니다.')
    }

    return {
        event: {
            onClickButton
        }
    }
}
