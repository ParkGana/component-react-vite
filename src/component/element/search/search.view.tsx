import { useSearch } from './search.hook'
import { Container, Icon, Input } from './search.style'

export function Search({ keyword, changeCallback }: { keyword: string; changeCallback: (value: string) => void }) {
    const { events } = useSearch(keyword, changeCallback)

    return (
        <Container>
            <Input
                type="text"
                placeholder={'검색어를 입력해 주세요.'}
                value={keyword}
                onChange={events.onChangeKeyword}
                onKeyUp={events.onPressEnter}
            />
            <Icon src={'/icon/search.png'} onClick={events.onClickButton} alt="icon" />
        </Container>
    )
}
