import React from 'react'
import SideBar from '../SideBar/SideBar'
import './Hero.scss'
import '../../Style/grid.scss'
import Slider from '../Slider/Slider'
import kart from '../../assets/img/kard.png'
import zemanet from '../../assets/img/zemanet.png'
import dasima from '../../assets/img/dasima.png'
import OfferSlider from '../OfferSlider/OfferSlider'
import img1 from '../../assets/img/reklam1.png'
import img2 from '../../assets/img/reklam2.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container-fluid container-xl">
        <div className="row align-items-start">
          <SideBar />
          <div className=' col-12 col-lg-9 d-flex flex-wrap justify-content-center'>
            <div className='col-12 col-lg-9 hero-left'>
              <Slider />
              <div className="about d-flex justify-content-between">
                <div className="col-4 about-item ">
                  <div className="about-img">
                    <img src={kart} alt="img" />
                  </div>
                  <p className="about-title" >Qapıda rəsmiləşdirmə</p>
                  <p className="about-desc">Nağd, hissə-hissə və ya kartla ödəmə imkanı ilə</p>
                </div>
                <div className="col-4 about-item text-center">
                  <div className="about-img">
                    <img src={zemanet} alt="img" />
                  </div>
                  <p className="about-title">Rəsmi Zəmanət</p>
                  <p className="about-desc">3 ilədək rəsmi zəmanət</p>
                </div>
                <div className="col-4 about-item text-center">
                  <div className="about-img">
                    <img src={dasima} alt="img" />
                  </div>
                  <p className="about-title">Pulsuz çatdırılma</p>
                  <p className="about-desc">Sürətli, təhlükəsiz və təmassız</p>
                </div>

              </div>
            </div>
            <div className="col-7 col-lg-3 hero-right">
              
              <OfferSlider />
            </div>
            <div className="hero-bottom col-12 d-flex">
                <div className="col-6">
                  <img src={img1} alt="reklam" />
                </div>
                <div className="col-6">
                <img src={img2} alt="reklam" />
                </div>
              </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Hero
