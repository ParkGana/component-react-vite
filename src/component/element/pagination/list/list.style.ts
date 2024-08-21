import styled from 'styled-components'

export namespace ListStyle {
    export const Container = styled.div``

    export const SafetyContainer = styled.div<{ type: string; view: boolean }>`
        ${({ theme, type, view }) => `
            display: ${view ? 'grid' : 'none'};
            grid-template-columns: 30px min(150px) 60px;
            gap: 10px;
            ${type === 'title' && `background-color: ${theme.color.gray};`};
            ${type === 'contents' && `border-bottom: 1px solid ${theme.color.gray}`};
            padding: 5px 10px;
            cursor: pointer;
        `}
    `

    export const Text = styled.p`
        ${({ theme }) => `
            text-align: center;
            ${theme.font.body1};
            color: ${theme.color.black};
        `}
    `
}
