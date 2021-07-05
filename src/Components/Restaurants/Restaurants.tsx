import React from 'react'
import "./Restaurants.css"
import  RestaurantsItem from './RestaurantsItem'

const Restaurants:React.FC = () => {
  return(
    <section className="restaurants">
      <div className="content">
        <div className="restaurants-wrapper">
          <div className="restaurants-point">
            <div className="restaurants-title">
              <h2>Promotions and news</h2>
            </div>
            <div className="restaurants-items">
              <RestaurantsItem />
              <RestaurantsItem />
              <RestaurantsItem />
            </div>
          </div>
          <div className="restaurants-point">
            <div className="restaurants-title">
              <h2>Restaurants</h2>
            </div>
            <div className="restaurants-items">
              <RestaurantsItem />
              <RestaurantsItem />
              <RestaurantsItem />
            </div>
            <div className="restaurants-more"><span>Load More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Restaurants