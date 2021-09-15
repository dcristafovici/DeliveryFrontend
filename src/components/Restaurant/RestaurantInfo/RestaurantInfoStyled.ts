import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';
import info from '../../../assets/img/info.svg';

export const RestaurantInfoStyled = styled.div`
  height: 360px;
  margin-bottom: 25px;
  position: relative;
  .restaurant {
    &-info {
      &__photo {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        height: 100%;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, #000A1A 0%, rgba(1, 27, 65, 0) 66.67%);
          mix-blend-mode: normal;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 45px 65px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
    &-content {
      &__name {
        font-size: 36px;
        color: ${COLORS.WHITE};
        line-height: 1.3;
        font-weight: 700;
        padding-bottom: 15px;
        margin-bottom: 20px;
        display: block;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      }
      &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
          font-size: 16px;
          font-weight: 400;
          color: ${COLORS.WHITE};
          &.restaurant-content__link {
            height: 30px;
            display: inline-flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            padding-left: 33px;
            padding-right: 12px;
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
            transition: ${HELPERS.TRANSITION};
            opacity: 0.5;
            position: relative;
            &::before {
              content: '';
              position: absolute;
              left: 12px;
              width: 14px;
              height: 14px;
              top: 50%;
              margin-top: -7px;
              background: url(${info}) no-repeat center/contain;
            }
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
