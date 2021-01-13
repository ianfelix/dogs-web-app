import { createGlobalStyle } from 'styled-components';
import typography from './typography/styles';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #333;
    font-family: ${typography.first}
  }
`;
