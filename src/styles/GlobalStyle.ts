import { createGlobalStyle } from "styled-components";

export const  GlobalStyle =  createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({theme}) => theme["gray-800"]};
    color: ${({theme}) => theme["gray-100"]};
    -webkit-font-smoothing : antialiased;
  }
  ::-webkit-scrollbar-track { /** é todo o preenchimento */
    background: ${({theme}) => theme["gray-700"]};
    border-radius: 9999px;
  }
  ::-webkit-scrollbar {//é o que ta por tras de todo o preenchimento da area da barra de rolagem
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {/** é apenas onde segura para rolar */
    background-color: ${({theme}) => theme["gray-900"]};
    border-radius: 99px;
  }
  :focus{
    outline: 0;
    box-shadow: 0 0 0 1px ${({theme}) => theme["green-500"]};
  }
  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

`