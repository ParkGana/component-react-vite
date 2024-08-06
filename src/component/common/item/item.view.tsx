import { ItemStyle } from './item.style'

export function Item({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <ItemStyle.Container>
            <ItemStyle.Title>{title}</ItemStyle.Title>
            <ItemStyle.Contents>{children}</ItemStyle.Contents>
        </ItemStyle.Container>
    )
}
