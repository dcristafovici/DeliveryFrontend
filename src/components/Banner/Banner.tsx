import React from 'react';
import { useDispatch } from 'react-redux';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import { BannerStyled, BannerContainerStyled } from './BannerStyled';

const Banner:React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <BannerStyled>
        <Section>
          <Container>
            <BannerContainerStyled>
              <div className="banner-image">
                <img src="/images/banner.jpg" alt="Banner" />
              </div>
              <div className="banner-content">
                <div className="banner-title">
                  Fast delivery of the delicious food
                </div>
              </div>
            </BannerContainerStyled>
          </Container>
        </Section>
      </BannerStyled>
    </>
  );
};

export default Banner;
