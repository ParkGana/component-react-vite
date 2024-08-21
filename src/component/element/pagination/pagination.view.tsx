import { usePagination } from './pagination.hook'
import { PaginationStyle } from './pagination.style'

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
    const { states, events } = usePagination(pageCount, totalPage, nowPage, nowGroup, clickCallback, changeCallback)

    return (
        <PaginationStyle.Container columnCount={states.columnCount}>
            <PaginationStyle.Arrow
                src="/icons/pagination-prev.png"
                disable={nowPage === 1}
                onClick={events.onClickPrev}
                alt="icon"
            />
            {[...Array(totalPage)].map((item, index) => (
                <PaginationStyle.Page
                    key={index}
                    className="pagination-page"
                    view={index >= (nowGroup - 1) * pageCount && index <= nowGroup * pageCount - 1}
                    now={index + 1 === nowPage}
                    onClick={() => events.onClickPage(index + 1)}
                >
                    {index + 1}
                </PaginationStyle.Page>
            ))}
            <PaginationStyle.Arrow
                src="/icons/pagination-next.png"
                disable={nowPage === totalPage}
                onClick={events.onClickNext}
                alt="icon"
            />
        </PaginationStyle.Container>
    )
}
