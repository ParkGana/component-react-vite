import styled from 'styled-components'

export namespace SwitchSectionStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 280px;
            height: 200px;
            position: relative;
            border: 1px solid ${theme.color.black};
            overflow: hidden;        
        `}
    `

    export const SafetyContainer = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        transition: 0.5s;
    `

    export const Section = styled.div`
    quality${({ theme }) => `
            width: 280px;
            height: 200px;
            display: grid;
            align-items: center;
            justify-items: center;
            ${theme.font.headline1};
            color: ${theme.color.black};
        `}
    `
}
