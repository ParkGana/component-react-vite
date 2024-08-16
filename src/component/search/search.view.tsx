import { useSearch } from './search.hook'
import { SearchStyle } from './search.style'

export function Search({ keyword, changeCallback }: { keyword: string; changeCallback: (value: string) => void }) {
    const { events } = useSearch(keyword, changeCallback)

    return (
        <SearchStyle.Container>
            <SearchStyle.Input
                type="text"
                placeholder={'검색어를 입력해 주세요.'}
                value={keyword}
                onChange={events.onChangeKeyword}
                onKeyUp={events.onPressEnter}
            />
            <SearchStyle.Icon src={'/icons/search.png'} onClick={events.onClickButton} alt="icon" />
        </SearchStyle.Container>
    )
}
