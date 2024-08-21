import styled from 'styled-components'
import { color } from '../../../configuration/color'
import { typography } from '../../../configuration/typography'

export const Container = styled.div`
    width: 280px;
    height: 200px;
    position: relative;
    border: 1px solid ${color.black};
    overflow: hidden;
`

export const SafetyContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    transition: 0.5s;
`

export const Section = styled.div`
    width: 280px;
    height: 200px;
    display: grid;
    align-items: center;
    justify-items: center;
    ${typography.headline1};
    color: ${color.black};
`
