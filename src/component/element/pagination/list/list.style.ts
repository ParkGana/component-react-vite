import styled from 'styled-components'
import { color } from '../../../../configuration/color'
import { typography } from '../../../../configuration/typography'

export const Container = styled.div``

export const SafetyContainer = styled.div<{ type: string; view: boolean }>`
    ${({ type, view }) => `
        display: ${view ? 'grid' : 'none'};
        grid-template-columns: 30px min(150px) 60px;
        gap: 10px;
        ${type === 'title' && `background-color: ${color.gray};`};
        ${type === 'contents' && `border-bottom: 1px solid ${color.gray}`};
        padding: 5px 10px;
        cursor: pointer;
    `}
`

export const Text = styled.p`
    text-align: center;
    ${typography.body1};
    color: ${color.black};
`
