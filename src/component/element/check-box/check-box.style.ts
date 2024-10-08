import styled from 'styled-components'
import { typography } from '../../../configuration/typography'
import { color } from '../../../configuration/color'

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
    display: none;

    & + label {
        width: 14px;
        height: 14px;
        position: relative;
        display: inline-block;
        border: 2px solid ${color.gray};
    }

    &:checked + label::after {
        content: '✔';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${color.gray};
        font-size: 8px;
        font-weight: 900;
        line-height: 10px;
        color: ${color.white};
        text-align: center;
    }
`
export const Box = styled.label`
    cursor: pointer;
`

export const Text = styled.label`
    ${typography.body1};
    color: ${color.black};
    padding-left: 5px;
    cursor: pointer;
`
