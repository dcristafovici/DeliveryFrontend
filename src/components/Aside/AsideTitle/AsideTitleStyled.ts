import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const AsideTitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  .aside-title {
    &__name {
     font-size: 18px;
     font-weight: 700;
     color: ${COLORS.PRIMARY_DARK}; 
    }
    &__remove {
      font-size: 12px;
      color: ${COLORS.GRAY_3};
      text-decoration: underline;
    }
  }
`;
