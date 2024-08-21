import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 100px);
    grid-template-columns: repeat(2, 100px);
`

export const Piece = styled.img`
    width: 100%;
    cursor: pointer;
`
