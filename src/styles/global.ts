import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['white']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Roboto', system-ui, sans-serif;
    }
`