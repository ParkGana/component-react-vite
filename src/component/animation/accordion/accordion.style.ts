import styled from 'styled-components'

export namespace AccordionStyle {
    export namespace Horizontal {
        export const Container = styled.div`
            width: 280px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        `

        export const SafetyContainer = styled.div`
            ${({ theme }) => `
                height: 100px;
                border: 1px solid ${theme.color.black};
                border-radius: 10px;
                padding: 10px;
                cursor: pointer;
            `}
        `

        export const Title = styled.p`
            ${({ theme }) => `
                ${theme.font.title3};
                color: ${theme.color.black};
            `}
        `

        export namespace Contents {
            export const Container = styled.div`
                display: none;
                overflow: hidden;
            `

            export const Text = styled.p`
                ${({ theme }) => `
                    ${theme.font.body1};
                    color: ${theme.color.black};
                    padding-top: 10px;
                `}
            `
        }
    }

    export namespace Vertical {
        export const Container = styled.div`
            display: grid;
            gap: 10px;
        `

        export const SafetyContainer = styled.div`
            ${({ theme }) => `
                border: 1px solid ${theme.color.black};
                border-radius: 10px;
                padding: 10px;
                cursor: pointer;
            `}
        `

        export const Title = styled.p`
            ${({ theme }) => `
                ${theme.font.title3};
                color: ${theme.color.black};
            `}
        `

        export namespace Contents {
            export const Container = styled.div`
                height: 0;
                overflow: hidden;
            `

            export const Text = styled.p`
                ${({ theme }) => `
                    ${theme.font.body1};
                    color: ${theme.color.black};
                    padding-top: 10px;
                `}
            `
        }
    }
}
