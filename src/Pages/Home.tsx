import React from 'react'
import Banner from '../Components/Banner/Banner'
import Sort from '../Components/Sort/Sort';
import Restaurants from '../Components/Restaurants/Restaurants';

const Home:React.FC = () => {
  return(
    <React.Fragment>
      <Banner />
      <Sort />
      <Restaurants />
    </React.Fragment>
  )
}

export default Home