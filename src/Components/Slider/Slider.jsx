import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.scss'
import img1 from '../../assets/img/main_slider1.png'
import img2 from '../../assets/img/main_slider2.png'
import img3 from '../../assets/img/main_slider3.png'
import img4 from '../../assets/img/main_slider4.png'

const Slider = () => {
    return (
        <div className=" hero-slider">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                navigation={{}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{}}
            >
                <SwiperSlide><img src={img1} alt="slider" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="slider" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="slider" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="slider" /></SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Slider