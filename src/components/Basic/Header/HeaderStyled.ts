import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';
import { device } from '../../../utils/breakpoints';

export const HeaderStyled = styled.header`
  height: 82px;
  border-bottom: 1px solid rgba(27, 83, 162, 0.104267);
  box-sizing: border-box;
  background: ${COLORS.WHITE};
  & > div.container-styled{
    height: 100%;
    & > div {
      height: 100%;
    }
  }
  .header-navigation{
    ul {
      display: flex;
      align-items: center;
    }
    li {
      margin-right: 35px;
      &:last-child{
        margin-right: 0;
      }
      a {
        color: ${COLORS.PRIMARY_DARK};
        transition: ${HELPERS.TRANSITION};
        font-weight: 400;
        &:hover {
          color: ${COLORS.PRIMARY_BLUE}
        }
      }
    }
  }
  .header-status{
    font-weight: 400;
  }

  .header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .header-account {
      margin-left: 20px;
    }
  }
  @media only screen and (${device.xs}){
    .header {
      &-navigation,
      &-phone,
      &-status {
        display: none;
      }
    }
  }
`;
