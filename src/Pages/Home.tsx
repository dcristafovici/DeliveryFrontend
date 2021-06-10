import React from 'react'
import Banner from '../Components/Banner/Banner'
import Restaurants from '../Components/Restaurants/Restaurants'
import Sort from '../Components/Sort/Sort'


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