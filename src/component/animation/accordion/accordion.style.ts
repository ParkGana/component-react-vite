import styled from 'styled-components'
import { color } from '../../../configuration/color'
import { typography } from '../../../configuration/typography'

export const HorizontalContainer = styled.div`
    width: 280px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`

export const HorizontalSafetyContainer = styled.div`
    height: 120px;
    border: 1px solid ${color.black};
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`

export const HorizontalTitle = styled.p`
    ${typography.title3};
    color: ${color.black};
`

export const HorizontalContentsContainer = styled.div`
    display: none;
    overflow: hidden;
`

export const HorizontalContentsText = styled.p`
    ${typography.body1};
    color: ${color.black};
    padding-top: 10px;
`

export const VerticalContainer = styled.div`
    display: grid;
    gap: 10px;
`

export const VerticalSafetyContainer = styled.div`
    border: 1px solid ${color.black};
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`

export const VerticalTitle = styled.p`
    ${typography.title3};
    color: ${color.black};
`

export const VerticalContentsContainer = styled.div`
    height: 0;
    overflow: hidden;
`

export const VerticalContentsText = styled.p`
    ${typography.body1};
    color: ${color.black};
    padding-top: 10px;
`
