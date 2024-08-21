import styled from 'styled-components'

export namespace PaginationStyle {
    export const Container = styled.div<{ columnCount: number }>`
        ${({ columnCount }) => `
            display: grid;
            align-items: center;
            grid-template-columns: repeat(${columnCount + 2}, 10px);
            gap: 20px;
            margin: 0 auto;
        `}
    `

    export const Arrow = styled.img<{ disable: boolean }>`
        ${({ disable }) => `
            cursor: pointer;
            ${disable && `opacity: 0.3;`};
        `}
    `

    export const Page = styled.p<{ view: boolean; now: boolean }>`
        ${({ view, now }) => `
            display: ${view ? 'block' : 'none'};
            font-size: 16px;
            line-height: 20px;
            font-weight: ${now ? '900' : '400'};
            text-align: center;
            cursor: pointer;
        `}
    `
}
