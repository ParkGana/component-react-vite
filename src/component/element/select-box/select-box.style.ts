import styled from 'styled-components'
import { typography } from '../../../configuration/typography'
import { color } from '../../../configuration/color'

export const Container = styled.div`
    width: 250px;
    position: relative;
    display: grid;
    grid-template-columns: auto 14px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${color.black};
    padding: 10px;
    cursor: pointer;
`

export const Selected = styled.p`
    ${typography.body1};
    color: ${color.black};
`

export const Arrow = styled.img``

export const OptionContainer = styled.div<{ isOpen: boolean }>`
    ${({ isOpen }) => `
        position: absolute;
        top: 40px;
        left: -1px;
        right: -1px;
        display: ${isOpen ? 'block' : 'none'};
        border: 1px solid ${color.black};
        z-index: 1;
    `}
`

export const OptionSafetyContainer = styled.div<{ isSelected: boolean }>`
    ${({ isSelected }) => `
        background-color: ${color.white};
        ${typography.body1};
        font-weight: ${isSelected ? '700' : '400'};
        padding: 10px;

        :hover {
            background-color: ${color.lightgray};
        }
    `}
`
