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

  h1, h2,h3, h4, p{
    margin: 0;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: ${typography.first};
    color: #333;
  }
`;
