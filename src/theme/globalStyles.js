// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/paper_fibers.png) repeat;
  }
  * {
    box-sizing: border-box;
  }
`;
 
export default GlobalStyle;