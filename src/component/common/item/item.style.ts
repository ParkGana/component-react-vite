import styled from 'styled-components'
import { color } from '../../../configuration/color'
import { typography } from '../../../configuration/typography'

export const Container = styled.div`
    width: 330px;
    position: relative;
    display: grid;
    justify-items: center;
    align-content: start;
    gap: 20px;
    border: 5px solid ${color.purple};
    border-radius: 20px;
    padding: 20px;
`

export const Title = styled.p`
    ${typography.headline3};
    color: ${color.black};
`

export const Contents = styled.div`
    display: grid;
    gap: 20px;
`
