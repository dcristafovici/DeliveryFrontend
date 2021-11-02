import styled from 'styled-components';
import { COLORS } from '../../constants';
import { device } from '../../utils/breakpoints';

export const BannerContainerStyled = styled.div`
  position: relative;
  height: 360px;
  padding: 80px 65px;
  .banner-image{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #000000 0%, rgba(1, 27, 65, 0) 66.67%);
    }
  }
  .banner-content{
    position: relative;
    z-index: 3;
    max-width: 570px;
    box-sizing: border-box;
  }
  .banner-title{
    font-size: 36px;
    margin-bottom: 45px;
    line-height: 1.3;
    color: ${COLORS.WHITE};
    font-weight: 700;
  }
  @media only screen and (${device.xs}){ 
    padding: 30px 20px;
    height: auto;
    .banner {
      &-title {
        font-size: 25px;
        margin-bottom: 20px;
      }
    }
  }
`;

export const BannerStyled = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  @media only screen and (${device.xs}){
    margin-bottom: 30px;
    margin-top: 20px;
  }
`;
