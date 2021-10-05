import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import Container from '../Basic/Container';
import Section from '../Basic/Section';
import Select from '../Basic/Select';
import { BannerStyled, BannerContainerStyled } from './BannerStyled';
import { Towers } from './Towers';
import { UPDATE_USER } from '../../GraphQL/Mutations';
import { useTypeSelector } from '../../redux/useTypeSelector';

const Banner:React.FC = () => {
  const dispatch = useDispatch();
  const [updateUser] = useMutation(UPDATE_USER);
  const { user = {} } = useTypeSelector((state) => state.authReducer);
  const { id, tower } = user;
  const initialTower = tower || 'Choose Tower';
  const onChangeSelect = (option:string) => {
    if (id) {
      updateUser({ variables: { data: { id: user.id, field: 'tower', value: option } } });
    }
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
                initialValue={initialTower}
              />
            </div>
          </BannerContainerStyled>
        </Container>
      </Section>
    </BannerStyled>
  );
};

export default Banner;
