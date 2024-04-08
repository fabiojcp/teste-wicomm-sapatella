import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--medium-gray);
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--medium-gray);
    }
  }

  html, border-style, #root{
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  .modal-opened {
    overflow: hidden;
  }

  #root {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;

    > div {
      width: 100%;
    }
  }

  body {
    overflow-x: hidden;
    background-color: var(--white);
  }
  *, button, input{
    border: 0;
    background: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: '__DM_Sans_88554e', '__DM_Sans_Fallback_88554e';
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }


  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button,
  input::-webkit-search-cancel-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  html, html:root, &:root {
    --pink: #cf215b;
    --pinkLight: #D33C6F;
    --white: #FFFFFF;
    --white80: #FFFFFF80;
    --white30: #FFFFFF30;
    --vannila: #fcfcfc;
    --black: rgb(0,0,0);
    --black40: rgb(0,0,0,0.4);
    --black4F: #4F4F4F;
    --black02: #484848;
    --black03: #d3d3d3;
    --lightGrey: #F5F5F5;
  }

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, main {
	margin: 0 !important;
	padding: 0 !important;
	border: 0 !important;
	font-size: 100% !important;
	font: inherit;
	vertical-align: baseline;
  cursor: default;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

#__next {
  margin: 0 auto;
}

`;
