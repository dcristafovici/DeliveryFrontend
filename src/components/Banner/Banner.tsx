import React from 'react';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import Select from '../Basic/Select';
import { BannerStyled, BannerContainerStyled } from './BannerStyled';
import { Towers } from './Towers';

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
              Fast delivery of the delicious food from Moscow City
            </div>
            <Select values={Towers} />
          </div>
        </BannerContainerStyled>
      </Container>
    </Section>
  </BannerStyled>
);

export default Banner;
