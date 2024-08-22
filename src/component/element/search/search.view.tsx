import { useSearch } from './search.hook'
import { Container, Icon, Input } from './search.style'

export function Search({ keyword, changeCallback }: { keyword: string; changeCallback: (value: string) => void }) {
    const { event } = useSearch(keyword, changeCallback)

    return (
        <Container>
            <Input
                type="text"
                placeholder={'검색어를 입력해 주세요.'}
                value={keyword}
                onChange={event.onChangeKeyword}
                onKeyUp={event.onPressEnter}
            />
            <Icon src={'/icon/search.png'} onClick={event.onClickButton} alt="icon" />
        </Container>
    )
}
