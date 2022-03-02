import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #0B0D17;
    --text: #D0D6F9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 10px;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 9px;
    }

    @media (max-width: 420px) {
      font-size: 6.5px;
    }
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: none;
    color: white;
  }

  h1, h2, h3, h4, button {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    text-transform: uppercase;
  }

  h5, span {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 300;
  }

  p, li, a {
    font-family: Barlow;
  }

  p {
    font-size: 1.8rem;
    color: var(--text);
  }

  h1 {
    font-size: 14.5rem;
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
    color: var(--text);
  }

  button {
    font-size: 3.2rem;
    cursor: pointer;
    color: var(--black);
  }

  .background {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    top: 0;
    transition: 0.8s;

    &.home {
      background: url(src/assets/bgs/home.png) no-repeat top;
      background-size: cover;
    }
    &.destination {
      background: url(src/assets/bgs/destination.png) no-repeat top;
      background-size: cover;
    }
    &.crew {
      background: url(src/assets/bgs/crew.png) no-repeat top;
      background-size: cover;
    }
    &.tech {
      background: url(src/assets/bgs/tech.png) no-repeat top;
      background-size: cover;
    }
  }
`;
