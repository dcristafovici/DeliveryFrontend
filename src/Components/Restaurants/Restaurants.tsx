import React from 'react';
import './Restaurants.sass';
import Title from '../Basic/Title/Title';

const Restaurants:React.FC = () => (
  <section className="restaurants">
    <div className="content">
      <Title name="Promotins and news" />
      <div className="restaurants-items" />
    </div>
  </section>
);

export default Restaurants;
