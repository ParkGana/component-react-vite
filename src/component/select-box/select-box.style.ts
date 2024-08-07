import styled from 'styled-components'

export namespace SelectBoxStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 250px;
            position: relative;
            display: grid;
            grid-template-columns: auto 14px;
            align-items: center;
            justify-content: space-between;
            border: 1px solid ${theme.color.black};
            padding: 10px;
            cursor: pointer;
        `}
    `

    export const Selected = styled.p`
        ${({ theme }) => `
            ${theme.font.body1};
            color: ${theme.color.black};
        `}
    `

    export const Arrow = styled.img``

    export namespace Option {
        export const Container = styled.div<{ isOpen: boolean }>`
            ${({ theme, isOpen }) => `
                position: absolute;
                top: 40px;
                left: -1px;
                right: -1px;
                display: ${isOpen ? 'block' : 'none'};
                border: 1px solid ${theme.color.black};
                z-index: 1;
            `}
        `

        export const SafetyContainer = styled.div<{ isSelected: boolean }>`
            ${({ theme, isSelected }) => `
                background-color: ${theme.color.white};
                ${theme.font.body1};
                font-weight: ${isSelected ? '700' : '400'};
                padding: 10px;

                :hover {
                    background-color: ${theme.color.lightgray};
                }
            `}
        `
    }
}
