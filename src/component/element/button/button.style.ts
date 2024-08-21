import styled from 'styled-components'
import { color } from '../../../configuration/color'
import { typography } from '../../../configuration/typography'

export const Container = styled.div`
    width: 150px;
    border: none;
    background-color: ${color.black};
    ${typography.title3};
    color: ${color.white};
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
`
