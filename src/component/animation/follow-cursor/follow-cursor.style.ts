import styled from 'styled-components'

export namespace FollowCursorStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 280px;
            height: 200px;
            position: relative;
            border: 1px solid ${theme.color.black};
            overflow: hidden;
        `}
    `

    export const Circle = styled.div`
        ${({ theme }) => `
            width: 50px;
            height: 50px;
            position: absolute;
            top: -50px;
            left: -50px;
            border-radius: 50%;
            background-color: ${theme.color.gray};
        `}
    `
}
