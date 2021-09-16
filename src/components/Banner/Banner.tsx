import React, { useState } from 'react';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import Select from '../Basic/Select';
import { BannerStyled, BannerContainerStyled } from './BannerStyled';
import { Towers } from './Towers';

const Banner:React.FC = () => {
  const [tower, setTower] = useState('');
  const onChangeSelect = (option:string) => {
    setTower(option);
  };
  return (
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
              <Select
                onChangeEvent={(option:string) => onChangeSelect(option)}
                values={Towers}
                initialValue="Choose tower"
              />
            </div>
          </BannerContainerStyled>
        </Container>
      </Section>
    </BannerStyled>
  );
};

export default Banner;
