import { CategoryStyle } from './category.style'

export function Category({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <CategoryStyle.Container>
            <CategoryStyle.Title>{title}</CategoryStyle.Title>
            <CategoryStyle.Contents>{children}</CategoryStyle.Contents>
        </CategoryStyle.Container>
    )
}
