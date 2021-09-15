import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const AsideSummaryStyled = styled.div`
  .aside-summary__items{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .aside-summary__item {
    span {
      display: block;
      font-size: 12px;
      color: ${COLORS.GRAY_3};
      margin-bottom: 10px;
      &:nth-child(2) {
        font-size: 16px;
        color: ${COLORS.PRIMARY_DARK};
        font-weight: 500;
      }
    }
    
  }
`;
