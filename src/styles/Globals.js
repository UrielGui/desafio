import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background: #202d53;
    color: #fff;
    font-family: Open Sans, sans-serif;
  }
  button {
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
    :disabled {
      opacity: 0.4;
      cursor: default;
    }
  }
  ul {
    list-style: none;
  }
`;
