import React from 'react';
import './Banner.sass';

const Banner:React.FC = () => (
  <section className="banner">
    <div className="content">
      <div className="banner-image">
        <img src="/images/banner/banner.jpg" alt="" />
      </div>
      <div className="banner-wrapper">
        <div className="banner-title">
          <h1>
            Fast delivery of delicious food
            <br />
            in Moscow-City
          </h1>
        </div>
        <div className="banner-find">
          {/* <select defaultValue='test'>
            <option defaultValue="Выберите башню" selected>Choose tower</option>
          </select> */}
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
