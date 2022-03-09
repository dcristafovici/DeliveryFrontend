import styled from 'styled-components';
import { COLORS } from '../../../../constants';

export const LeavePageAlertStyled = styled.div`
  .leave-page {
    &__title {
      font-size: 28px;
      line-height: 1.2;
      font-weight: 700;
      color: ${COLORS.PRIMARY_DARK};
      text-align: center;
      letter-spacing: 0.6px;
      margin-bottom: 10px;
    }
    &__paragraph {
      font-size: 16px;
      text-align: center;
      margin-bottom: 20px;
      font-weight: 700;
    }
    &__buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
