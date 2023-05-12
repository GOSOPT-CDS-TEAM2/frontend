import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${Reset}
#root, body, html {
    width:100%;
    height: 100vh;
    margin: 0 auto;
}
html {
    font-size: 62.5%;
}
* {
    box-sizing: border-box;
}`;
