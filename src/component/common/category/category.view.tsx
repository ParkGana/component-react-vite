import { Container, Contents, Title } from './category.style'

export function Category({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Contents>{children}</Contents>
        </Container>
    )
}
