import { usePagination } from './pagination.hook'
import { Arrow, Container, Page } from './pagination.style'

export function Pagination({
    pageCount,
    totalPage,
    nowPage,
    nowGroup,
    clickCallback,
    changeCallback
}: {
    pageCount: number
    totalPage: number
    nowPage: number
    nowGroup: number
    clickCallback: (value: number) => void
    changeCallback: (value: number) => void
}) {
    const { state, event } = usePagination(pageCount, totalPage, nowPage, nowGroup, clickCallback, changeCallback)

    return (
        <Container columnCount={state.columnCount}>
            <Arrow src="/icon/pagination-prev.png" disable={nowPage === 1} onClick={event.onClickPrev} alt="icon" />
            {[...Array(totalPage)].map((_, index) => (
                <Page
                    key={index}
                    className="pagination-page"
                    view={index >= (nowGroup - 1) * pageCount && index <= nowGroup * pageCount - 1}
                    now={index + 1 === nowPage}
                    onClick={() => event.onClickPage(index + 1)}
                >
                    {index + 1}
                </Page>
            ))}
            <Arrow
                src="/icon/pagination-next.png"
                disable={nowPage === totalPage}
                onClick={event.onClickNext}
                alt="icon"
            />
        </Container>
    )
}
