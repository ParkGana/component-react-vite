import styled from 'styled-components'
import { color } from '../../../configuration/color'
import { typography } from '../../../configuration/typography'

export const Container = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 200px 20px;
    gap: 5px;
    border: 1px solid ${color.black};
    padding: 10px;
`

export const Input = styled.input`
    border: none;
    ${typography.body1};
    color: ${color.black};

    :focus {
        outline: none;
    }
`

export const Icon = styled.img`
    cursor: pointer;
`
