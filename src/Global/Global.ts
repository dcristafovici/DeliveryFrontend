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
  body{
    background: ${COLORS.GRAY_BG};
    &.stoped {
      overflow: hidden;
    }
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

  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
    min-height: 50px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  body.modal-open {
    overflow: hidden;
  }
  input {
    border: none;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    padding-left: 15px;
    background: ${COLORS.GRAY_4};
    border-radius: 3px;
    &::placeholder {
      font-weight: 400;
      color: ${COLORS.GRAY_1};
    }
  }

  .loading {
    position: relative;
    overflow: hidden;
  }
  .loading:after {
    background: #ccc;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100px);
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: loading 0.8s infinite;
  }
  @keyframes loading {
      100% {
          transform: translateX(100%);
      }
  }
`;
