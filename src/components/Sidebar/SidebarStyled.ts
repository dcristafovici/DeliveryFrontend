import styled from 'styled-components';
import { COLORS } from '../../constants';

export const SidebarStyled = styled.div`
  background: ${COLORS.WHITE};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 35px 40px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  .sidebar {
    &-back {
      display: none;
      margin-bottom: 30px;
      svg {
        transform: rotate(-90deg);
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
    }
  }
  form > div:last-child {
    margin-bottom: 0;
  }
`;
