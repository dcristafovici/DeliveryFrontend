import styled from 'styled-components';
import { COLORS } from '../../constants';

export const AuthPopupStyled = styled.div`
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
  .popup {
    &-title {
      font-size: 28px;
      line-height: 1.2;
      letter-spacing: 0.6px;
      margin-bottom: 30px;
      font-weight: 700;
      text-align: center;
      color: ${COLORS.PRIMARY_DARK};
    }
  }
`;
