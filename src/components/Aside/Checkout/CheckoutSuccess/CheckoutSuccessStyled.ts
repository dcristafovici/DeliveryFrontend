import styled from 'styled-components';
import { COLORS } from '../../../../constants';

export const CheckoutSuccessStyled = styled.div`
  
  .checkout-success__wrapper {
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
  }
  .title {
    text-align: center;
  }
  .icon {
    text-align: center;
    margin-bottom: 30px;
    position: relative;
    top: -10px;
    svg {
      width: 60px;
      height: 60px;
    }
  }
  ul {
    margin-top: 30px;
    &:first-child{
      margin-top: 0;
    }
    li {
      color: ${COLORS.GRAY_1};
      font-size: 16px;
      line-height: 1.5;
      font-weight: 400;
      margin-bottom: 6px;
      &:last-child {
        margin-bottom: 0;
      }
      span,
      a{
        font-weight: 500;
        margin-left: 7px;
        font-size: 16px;
        color: ${COLORS.PRIMARY_BLUE}
      }
      span a {
        margin-left: 0;
      }
      a {
        border-bottom: 1px dotted ${COLORS.PRIMARY_BLUE};
        &:hover {
          border-bottom: 1px solid ${COLORS.PRIMARY_BLUE};
        }
      }
    }
  }
`;
