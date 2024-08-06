import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const style = createGlobalStyle`
    ${reset}

    * {
        margin: 0;
        padding: 0;
    }

    body {
        -ms-overflow-style: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`
