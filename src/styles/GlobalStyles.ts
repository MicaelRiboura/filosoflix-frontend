import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root{
      --primary: #581BA9;
      --primaryHover: #441385;
      --header-color: #10101A;
      --bg-color: #0D0E1C;
      --dark: #09090D;
      --white: #fff;

  }
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mukta', sans-serif
  }

  body{
    background-color: var(--bg-color);
  }
`;
 
export default GlobalStyle;