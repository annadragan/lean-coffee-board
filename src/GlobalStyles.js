import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 12px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 112.5%;
    background-color: #0e101c;
  }

  input, label, button, textarea {
    font-size: 1em;
  }

  h1 {
    color: green;
    background-color: mistyrose;
    border-radius: 5px;
  }

`;
