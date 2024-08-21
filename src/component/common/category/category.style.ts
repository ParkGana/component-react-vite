import styled from 'styled-components'
import { typography } from '../../../configuration/typography'
import { color } from '../../../configuration/color'
import { ratio } from '../../../configuration/ratio'

export const Container = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 30px;
`

export const Title = styled.p`
    ${typography.headline1};
    color: ${color.black};
`

export const Contents = styled.div`
    display: grid;
    gap: 30px;

    ${ratio.size({
        web: `
            grid-template-columns: repeat(3, 1fr);
        `,
        tablet: `
            grid-template-columns: repeat(2, 1fr);
        `,
        mobile: ``
    })}
`
