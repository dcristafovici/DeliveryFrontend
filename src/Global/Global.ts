import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "HelveticaNeueCyr", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${COLORS.PRIMARY_DARK};
  }
  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }
  ul {
   margin: 0;
   padding: 0;
   list-style-type: none; 
  }
  input,
  select,
  textarea{
    outline: none;
    background: none;
    border: none;
  }
  button{
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
