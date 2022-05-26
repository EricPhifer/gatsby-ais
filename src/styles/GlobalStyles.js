import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #0064AD;
    --gray: #818386;
    --black: #221F1F;
    --red: #FF0035;
    --white: #FBF5F3;
    --green: #6BBF59;
  }
  html {
    background-image: var(--white);
    background-size: 100%;
    background-attachment: fixed;
    font-size: 10px;
    overflow-x: hidden;
  }

  button {
    display: flex;
    max-width: 800px;
    width: 100%;
    margin: 1.5rem auto;
    padding: 2rem 0;
    justify-content: center;
    box-shadow: 3px 3px 10px black;
    background: darkcyan;
    color: white;
    border: 0;
    border-radius: 40px;
    cursor: pointer;
    --cast: 2px;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.05s;
    a {
      text-decoration: none;
      color: white;
    }
  }
  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--blue) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;
