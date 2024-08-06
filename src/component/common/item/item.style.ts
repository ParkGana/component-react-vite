import styled from 'styled-components'

export namespace ItemStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 280px;
            position: relative;
            display: grid;
            justify-items: center;
            align-content: start;
            gap: 20px;
            border: 5px solid ${theme.color.purple};
            border-radius: 20px;
            padding: 20px;
        `}
    `

    export const Title = styled.p`
        ${({ theme }) => `
            ${theme.font.headline3};
            color: ${theme.color.black};
        `}
    `

    export const Contents = styled.div`
        display: grid;
        gap: 20px;
    `
}
