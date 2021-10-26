import styled from 'styled-components';
import { COLORS, HELPERS } from '../../constants';
import { BLUE_DARK, PRIMARY_BLUE } from '../../constants/colors';

export const CategoriesStyled = styled.div`
  margin-bottom: 30px;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    flex: auto;
    display: inline-flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    background: ${COLORS.PRIMARY_BLUE};
    color: ${COLORS.WHITE};
    justify-content: center;
    cursor: pointer;
    transition: ${HELPERS.TRANSITION};
    margin-right: 10px;
    &:hover {
      background: ${BLUE_DARK};
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
