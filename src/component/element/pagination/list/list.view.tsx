import { Container, SafetyContainer, Text } from './list.style'

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
        <Container>
            <SafetyContainer type={'title'} view>
                <Text>No.</Text>
                <Text>Title</Text>
                <Text>Writer</Text>
            </SafetyContainer>

            {postList.map((item, index) => (
                <SafetyContainer
                    key={index}
                    type={'contents'}
                    view={index >= (nowPage - 1) * postCount && index <= (nowPage - 1) * postCount + postCount - 1}
                >
                    <Text>{item[0]}</Text>
                    <Text>{item[1]}</Text>
                    <Text>{item[2]}</Text>
                </SafetyContainer>
            ))}
        </Container>
    )
}
