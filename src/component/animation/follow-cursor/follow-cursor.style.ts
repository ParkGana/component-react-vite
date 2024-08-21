import styled from 'styled-components'
import { color } from '../../../configuration/color'

export const Container = styled.div`
    width: 280px;
    height: 200px;
    position: relative;
    border: 1px solid ${color.black};
    overflow: hidden;
`

export const Circle = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: -50px;
    left: -50px;
    border-radius: 50%;
    background-color: ${color.gray};
`
