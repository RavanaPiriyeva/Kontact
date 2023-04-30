import React from 'react'
import './Home.scss'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import KontaktTV from '../Components/KontaktTV/KontaktTV'
import Partnyor from '../Components/Partnyor/Partnyor'


const Home = () => {
  return (
    <div>
      <Hero />
      <div className="chose-product">
        <div className="container-fluid container-xl"><h2>Sizin üçün Seçdiklərimiz</h2></div>
        <Products />
      </div>
      <div className="chose-product">
        <div className="container-fluid container-xl"><h2>Həftənin təklifləri</h2></div>
        <Products />
      </div>
      <KontaktTV />
      <Partnyor/>
    </div>


  )
}

export default Home
