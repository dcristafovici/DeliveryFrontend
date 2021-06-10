import React from 'react'
import "./Banner.css"
const Banner:React.FC = () => {
  return(
    <section className="banner">
      <div className="content">
        <div className="banner-image">
          <img src="/images/banner/banner.jpg" alt="" />
        </div>
        <div className="banner-wrapper">
          <div className="banner-title">
            <h1>Быстрая доставка вкусной еды <br />в Москва-сити</h1>
          </div>
          <div className="banner-find">
            <select>
              <option value="Выберите башню" selected>Выберите башню</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner