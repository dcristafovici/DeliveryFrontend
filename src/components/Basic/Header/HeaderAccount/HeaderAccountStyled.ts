import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../../constants';

export const HeaderAccountStyled = styled.div`
  .auth-button {
    height: 40px;
    padding: 0 25px;
    background: ${COLORS.PRIMARY_BLUE};
    display: inline-flex;
    align-items: center;
    height: 40px;
    border-radius: 3px;
    min-width: 160px;
    justify-content: center;
    transition: ${HELPERS.TRANSITION};
    color: ${COLORS.WHITE};
    font-weight: 500;
    font-size: 13px;
    &:hover{
      background: ${COLORS.BLUE_DARK};
    }
  }
`;
