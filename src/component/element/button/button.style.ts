import styled from 'styled-components'

export namespace ButtonStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 150px;
            border: none;
            background-color: ${theme.color.black};
            ${theme.font.title3};
            color: ${theme.color.white};
            text-align: center;
            padding: 10px 0;
            cursor: pointer;
        `}
    `
}
