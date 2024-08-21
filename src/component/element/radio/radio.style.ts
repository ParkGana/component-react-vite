import styled from 'styled-components'
import { color } from '../../../configuration/color'
import { typography } from '../../../configuration/typography'

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
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border: 2px solid ${color.gray};
    border-radius: 50%;
    outline: none;
    cursor: pointer;

    :checked {
        background-color: ${color.gray};
        border: 2px solid ${color.white};
        box-shadow: 0 0 0 2px ${color.gray};
    }
`

export const Text = styled.label`
    ${typography.body1};
    color: ${color.black};
    padding-left: 5px;
    cursor: pointer;
`
