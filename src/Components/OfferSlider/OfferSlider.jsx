import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './OfferSlider.scss'
import '../../Style/grid.scss'

import img1 from '../../assets/img/phone1.png'
import img2 from '../../assets/img/phone2.png'
import img3 from '../../assets/img/phone3.png'


const OfferSlider = () => {
    return (
        <div className="offer-slider">
            <div className="slider-title">
                Kontakt sevindirir
              </div>
            <div className="time">
                <ul className="d-flex justify-content-around ps-0">
                    <li><p>8</p>saat </li>
                    <li> <p>49</p>dəqiqə </li>
                    <li>  <p>15</p>saniyə </li>
                </ul>
            </div>
           <div className="slider">   <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                pagination={{ clickable: true }}

                navigation={{}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{}}
            >
                <SwiperSlide>  <div class=" flex-wrap d-flex justify-content-center">
                    <img src={img1} alt="..." />
                    <div class="slider-text">Samsung Galaxy A14 (SM-A145) 4/64 GB Light Green</div>
                    <div class="price">
                        <div>399.99</div>
                        <button>Səbətə at</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>  <div class="d-flex flex-wrap justify-content-center">
                    <img src={img2} alt="..." />
                    <div class="slider-text">OPPO Reno 8T 8/128 GB Orange</div>
                    <div class="price">
                        <div>399.99</div>
                        <button>Səbətə at</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>  <div class="flex-wrap d-flex justify-content-center">
                    <img src={img3} alt="..." />
                    <div class="slider-text">PlayStation 5 + Dualsense + Charging
                    Station
                                                    </div>
                    <div class="price">
                        <div>399.99</div>
                        <button>Səbətə at</button>
                    </div>
                </div></SwiperSlide>


            </Swiper></div>
           
            <div className="allOffer"><a href="#">Bütün təklifləri gör</a></div>
        </div>
    )
}

export default OfferSlider
