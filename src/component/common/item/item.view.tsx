import { Container, Contents, Title } from "./item.style";

export function Item({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Contents>{children}</Contents>
        </Container>
    )
}
