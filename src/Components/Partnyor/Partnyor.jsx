import React from 'react'
import './Partnyor.scss'
import '../../Style/grid.scss'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";
const Partnyor = () => {
  return (
    <div className="partnyor">
      <div className="container-fluid container-xl">
          <h2>Partnyorlar</h2>
      <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={6}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{}}
                    breakpoints={{
                     300: {
                         slidesPerView: 4,
                     },
                     768: {
                         slidesPerView: 6,
                     },
                 }}
                >
                    <SwiperSlide>
                       <div className="img"><img src="https://kontakt.az/wp-content/uploads/2020/03/Beurer_png.webp" alt="img"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="img"><img src="https://kontakt.az/wp-content/uploads/2022/10/Tefal-1200x1200_Logo_png.webp" alt="img"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="img"><img src="	https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="img"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="img"><img src="https://kontakt.az/wp-content/uploads/2020/03/thomas_png.webp" alt="img"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="img"><img src="https://kontakt.az/wp-content/uploads/2020/03/gala_png.webp" alt="img"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="img"><img src="https://kontakt.az/wp-content/uploads/2020/03/adona_png.webp" alt="img"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="img"><img src="	https://kontakt.az/wp-content/uploads/2020/03/Sonorus_png.webp" alt="img"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="img"><img src="https://kontakt.az/wp-content/uploads/2020/03/Remington_png.webp" alt="img"/></div>
                    </SwiperSlide>
                </Swiper>
      </div>
    </div>
  )
}

export default Partnyor
