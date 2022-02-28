import styled from 'styled-components';
import { COLORS } from '../../../../constants';

export const InfoPopupStyled = styled.div`
  text-align: center;
  .info-popup {
    &__title {
      font-size: 28px;
      line-height: 1.2;
      letter-spacing: 0.6px;
      margin-bottom: 10px;
      font-weight: 700;
      text-align: center;
      color: ${COLORS.PRIMARY_DARK};
    }
    &__icon {
      margin-bottom: 20px;
      svg {
        fill: ${COLORS.PRIMARY_BLUE};
      }
    }
    &__paragraph {
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
`;
