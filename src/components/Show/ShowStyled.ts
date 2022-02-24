import styled from 'styled-components';
import { COLORS } from '../../constants';

export const ShowStyled = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 22;
  background: ${COLORS.WHITE};
  padding: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  max-height: calc(95vh);
  overflow-y: scroll;
  max-width: 560px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY_BLUE};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`;

export const OverlayStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background: rgba(0,0,0,0.5);
`;
