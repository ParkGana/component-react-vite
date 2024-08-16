import styled from 'styled-components'

export namespace RadioStyle {
    export const Container = styled.div`
        display: grid;
        grid-template-columns: repeat(3, fit-content(200px));
        gap: 20px;
    `

    export const SafetyContainer = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2, auto);
    `

    export const Input = styled.input`
        ${({ theme }) => `
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 14px;
            height: 14px;
            border: 2px solid ${theme.color.gray};
            border-radius: 50%;
            outline: none;
            cursor: pointer;

            :checked {
                background-color: ${theme.color.gray};
                border: 2px solid ${theme.color.white};
                box-shadow: 0 0 0 2px ${theme.color.gray};
            }
        `}
    `

    export const Text = styled.label`
        ${({ theme }) => `
            ${theme.font.body1};
            color: ${theme.color.black};
            padding-left: 5px;
            cursor: pointer;
        `}
    `
}
