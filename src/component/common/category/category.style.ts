import styled from 'styled-components'

export namespace CategoryStyle {
    export const Container = styled.div`
        display: grid;
        justify-items: center;
        align-items: center;
        gap: 30px;
    `

    export const Title = styled.p`
        ${({ theme }) => `
            ${theme.font.headline1};
            color: ${theme.color.black};
        `}
    `

    export const Contents = styled.div`
        ${({ theme }) => `
            display: grid;
            gap: 30px;

            ${theme.ratio.size({
                large: `
                        grid-template-columns: repeat(3, 1fr);
                    `,
                medium: `
                        grid-template-columns: repeat(2, 1fr);
                    `,
                small: ``
            })}
        `}
    `
}
