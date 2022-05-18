import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
    color: #000;
  }

  h1,h2,h3,h4,h5,h6 {
    text-align: center;
    font-weight: normal;
    margin: 0;
  }
  
`;

export default Typography;
