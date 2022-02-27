import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: '#0B0D17';
    --text: '#D0D6F9';
    --main: '#FFFFFF'
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 10px;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: none;
    color: white;
  }

  h1, h2, h3, h4, button {
    font-family: Bellefair;
    text-transform: uppercase;
  }

  h5, span {
    font-family: 'Barlow Condensed', sans-serif;
  }

  p, li, a {
    font-family: Barlow;
    color: white;
  }

  h1 {
    font-size: 15rem;
  }

  h2 {
    font-size: 10rem;
  }

  h3 {
    font-size: 5.6rem;
  }

  h4 {
    font-size: 3.2rem;
  }

  h5 {
    font-size: 2.8rem;
    letter-spacing: 0.475rem;
    text-transform: uppercase;
  }

  button {
    cursor: pointer;
  }
`;
