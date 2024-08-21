import { ListStyle } from './list.style'

export function List({
    postList,
    postCount,
    nowPage
}: {
    postList: Array<string[]>
    postCount: number
    nowPage: number
}) {
    return (
        <ListStyle.Container>
            <ListStyle.SafetyContainer type={'title'} view>
                <ListStyle.Text>No.</ListStyle.Text>
                <ListStyle.Text>Title</ListStyle.Text>
                <ListStyle.Text>Writer</ListStyle.Text>
            </ListStyle.SafetyContainer>

            {postList.map((item, index) => (
                <ListStyle.SafetyContainer
                    key={index}
                    type={'contents'}
                    view={index >= (nowPage - 1) * postCount && index <= (nowPage - 1) * postCount + postCount - 1}
                >
                    <ListStyle.Text>{item[0]}</ListStyle.Text>
                    <ListStyle.Text>{item[1]}</ListStyle.Text>
                    <ListStyle.Text>{item[2]}</ListStyle.Text>
                </ListStyle.SafetyContainer>
            ))}
        </ListStyle.Container>
    )
}
