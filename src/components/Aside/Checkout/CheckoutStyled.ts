import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const CheckoutStyled = styled.div`
  width: 100%;
  max-width: 560px;
  background: ${COLORS.WHITE};
  position: fixed;
  top: 50%;
  z-index: 25;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  max-height: calc(95vh);
  overflow-y: scroll;
`;
