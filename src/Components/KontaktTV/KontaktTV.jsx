import React from 'react'
import './KontaktTV.scss'
import '../../Style/grid.scss'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";


const KontaktTV = () => {
    return (
        <div className="tv">
            <div className="container-xl container-fluid">
                <h2>
                    <img src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/kontakt-tv.png" alt="img" /> Kontakt TV</h2>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={4}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{}}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="tv-item">
                            <Link to='https://www.youtube.com/watch?v=KaRqqQsRoiw'>
                                <div className="img"><img src="	https://img.youtube.com/vi/fSg-pVFdCdQ/mqdefault.jpg" alt="youtobe" />
                                    <i className="fa-solid fa-play"></i></div>
                                <h4>Sony WH-1000XM5</h4>
                            </Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="tv-item">
                            <Link to='https://www.youtube.com/watch?v=KaRqqQsRoiw'>
                                <div className="img"><img src="https://img.youtube.com/vi/xov3fOpsgk0/mqdefault.jpg" alt="youtobe" />
                                    <i className="fa-solid fa-play"></i></div>
                                <h4>Sony WH-1000XM5</h4>
                            </Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="tv-item">
                            <Link to='https://www.youtube.com/watch?v=KaRqqQsRoiw'>
                                <div className="img"><img src="	https://img.youtube.com/vi/KaRqqQsRoiw/mqdefault.jpg" alt="youtobe" />
                                    <i className="fa-solid fa-play"></i></div>
                                <h4>Sony WH-1000XM5</h4>
                            </Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="tv-item">
                            <Link to='https://www.youtube.com/watch?v=KaRqqQsRoiw'>
                                <div className="img"><img src="		https://img.youtube.com/vi/lU4rmm3Lamw/mqdefault.jpg" alt="youtobe" />
                                    <i className="fa-solid fa-play"></i></div>
                                <h4>Sony WH-1000XM5</h4>
                            </Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="tv-item">
                            <Link to='https://www.youtube.com/watch?v=KaRqqQsRoiw'>
                                <div className="img"><img src="	https://img.youtube.com/vi/KaRqqQsRoiw/mqdefault.jpg" alt="youtobe" />
                                    <i className="fa-solid fa-play"></i></div>
                                <h4>Sony WH-1000XM5</h4>
                            </Link>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="tv-item">
                            <Link to='https://www.youtube.com/watch?v=KaRqqQsRoiw'>
                                <div className="img"><img src="	https://img.youtube.com/vi/xov3fOpsgk0/mqdefault.jpg" alt="youtobe" />
                                    <i className="fa-solid fa-play"></i></div>
                                <h4>Sony WH-1000XM5</h4>
                            </Link>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="tv-item">
                            <Link to='https://www.youtube.com/watch?v=KaRqqQsRoiw'>
                                <div className="img"><img src="	https://img.youtube.com/vi/fSg-pVFdCdQ/mqdefault.jpg" alt="youtobe" />
                                    <i className="fa-solid fa-play"></i></div>
                                <h4>Sony WH-1000XM5</h4>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default KontaktTV
