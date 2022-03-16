import React from 'react';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import Suggest from '../Basic/Suggest';
import { BannerStyled, BannerContainerStyled } from './BannerStyled';

const Banner:React.FC = () => (
  <BannerStyled>
    <Section>
      <Container>
        <BannerContainerStyled>
          <div className="banner-image">
            <img src="/images/banner.jpg" alt="Banner" />
          </div>
          <div className="banner-content">
            <div className="banner-title">
              TEST1 Fast delivery of the delicious food
            </div>
          </div>
          <Suggest />
        </BannerContainerStyled>
      </Container>
    </Section>
  </BannerStyled>
);

export default Banner;
