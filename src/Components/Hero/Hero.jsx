import React from 'react'
import SideBar from '../SideBar/SideBar'
import './Hero.scss'
import '../../Style/grid.scss'
import Slider from '../Slider/Slider'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container-fluid container-xl">
        <div className="row">
          <SideBar />
          <Slider/>

        </div>
      </div>
    </div>
  )
}

export default Hero
