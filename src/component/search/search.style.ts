import styled from 'styled-components'

export namespace SearchStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            align-items: center;
            grid-template-columns: 200px 20px;
            gap: 5px;
            border: 1px solid ${theme.color.black};
            padding: 10px;
        `}
    `

    export const Input = styled.input`
        ${({ theme }) => `
            border: none;
            ${theme.font.body1};
            color: ${theme.color.black};

            :focus {
                outline: none;
            }
        `}
    `

    export const Icon = styled.img`
        cursor: pointer;
    `
}
