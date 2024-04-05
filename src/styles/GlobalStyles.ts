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
  }

  html, html:root, &:root {
    --pink: #cf215b;
    --white: #FFFFFF;
    --white30: #FFFFFF30;
    --black: rgb(0,0,0);
    --black40: rgb(0,0,0,0.4);
  }


`;
