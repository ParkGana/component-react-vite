import { useEffect, useRef, useState } from 'react'

export function useSelectBox(selectCallback: (value: string) => void) {
    const ref = useRef<any>(null)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside)

        return () => {
            document.removeEventListener('mousedown', onClickOutside)
        }
    }, [ref])

    /* SELECT BOX 외부 영역 클릭 이벤트 */
    const onClickOutside = (e: any): void => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }

    /* SELECT BOX 클릭 이벤트 */
    const onToggleSelect = () => {
        setIsOpen(!isOpen)
    }

    /* SELECT BOX 선택 이벤트 */
    const onSelectOption = (value: string) => {
        selectCallback(value)
    }

    return {
        states: {
            isOpen
        },
        refs: {
            ref
        },
        events: {
            onToggleSelect,
            onSelectOption
        }
    }
}
