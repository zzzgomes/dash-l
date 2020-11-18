import {createGlobalStyle} from "styled-components";
import {normalize} from 'styled-normalize'

import HelveticaLight from './assets/fonts/Helvetica-Light.woff'
import HelveticaLight2 from './assets/fonts/Helvetica-Light.woff2'

import HelveticaBold from './assets/fonts/Helvetica-Bold.woff'
import HelveticaBold2 from './assets/fonts/Helvetica-Bold.woff2'

import HelveticaBoldOblique from './assets/fonts/Helvetica-BoldOblique.woff'
import HelveticaBoldOblique2 from './assets/fonts/Helvetica-BoldOblique.woff2'

import HelveticaCompressed from './assets/fonts/Helvetica-Compressed.woff'
import HelveticaCompressed2 from './assets/fonts/Helvetica-Compressed.woff2'

import HelveticaRoundedBold from './assets/fonts/HelveticaRounded-Bold.woff'
import HelveticaRoundedBold2 from './assets/fonts/HelveticaRounded-Bold.woff2'

import HelveticaOblique from './assets/fonts/Helvetica-Oblique.woff'
import HelveticaOblique2 from './assets/fonts/Helvetica-Oblique.woff2'

import Helvetica from './assets/fonts/Helvetica.woff'
import Helvetica2 from './assets/fonts/Helvetica.woff2'

export const GlobalStyle = createGlobalStyle`
    ${normalize};
    
    @font-face {
        font-family: 'Helvetica';
        src: url(${HelveticaLight2}) format('woff2'),
            url(${HelveticaLight}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Helvetica';
        src: url(${HelveticaBold2}) format('woff2'),
            url(${HelveticaBold}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Helvetica';
        src: url(${HelveticaBoldOblique2}) format('woff2'),
            url(${HelveticaBoldOblique}) format('woff');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Helvetica';
        src: url(${HelveticaCompressed2}) format('woff2'),
            url(${HelveticaCompressed}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Helvetica';
        src: url(${HelveticaRoundedBold2}) format('woff2'),
            url(${HelveticaRoundedBold}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Helvetica';
        src: url(${HelveticaOblique2}) format('woff2'),
            url(${HelveticaOblique}) format('woff');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Helvetica';
        src: url(${HelveticaLight2}) format('woff2'),
            url(${HelveticaLight}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    *, *::after, *::before {
        font: 16px 'Helvetica', Georgia, sans-serif;
        margin: 0;
        padding: 0;
    }
`