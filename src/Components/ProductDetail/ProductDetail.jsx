import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ProductDetail.scss'
import '../../Style/grid.scss'
import Box from '@mui/material/Box';

const ProductDetail = ({ product }) => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState();
    const [count, setCount] = useState();
    let [num, setNum] = useState();
   
    const handleClick = (i) => {
        setNum(i)
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
        setCount(Math.round(product.newPrice / 6) - 0.01)

        if (event.target.value == 9) {
            setName("range1")
            setCount(Math.round(product.newPrice / 9) - 0.01)

        }
        else if (event.target.value == 12) {
            setName("range2")
            setCount(Math.round(product.newPrice / 12) - 0.01)
        }
        else if (event.target.value == 15) {
            setCount(Math.round(product.newPrice / 15) - 0.01)
            setName("range3")
        }
        else if (event.target.value == 18) {
            setName("range4")
            setCount(Math.round(product.newPrice / 18) - 0.01)

        }
        else if (event.target.value == 21) {
            setName("range5")
            setCount(Math.round(product.newPrice / 21) - 0.01)
        }
        else if (event.target.value == 24) {
            setName("range6")
            setCount(Math.round(product.newPrice / 24) - 0.01)

        }
        else {
            setName("range")
            setCount(Math.round(product.newPrice / 6) - 0.01)
        }
    };

    return (
        <Box className="box">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-12 left-part d-flex align-items-center">
                        <div className="imgList col-3">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={4}
                                direction={"vertical"}
                                autoplay={{
                                    "delay": 2000,
                                    "disableOnInteraction": false
                                }}
                                // pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                style={{}}
                            >
                                {
                                    product.otherImg.map((data, index) => {
                                        return (<SwiperSlide>
                                            <div className="imgList-item" onClick={() => handleClick(index)}> <div className="img"><img src={data} alt="img" /></div>  </div>
                                        </SwiperSlide>)
                                    })}
                            </Swiper>
                        </div>

                        <div className="big-img col-9">
                            <img src={num ? product.otherImg[num] : product.otherImg[0]} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-12 right-part">
                        <h2>{product.title}</h2>
                        <div className="feature">
                            <a href="#"><img src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/kart.png" alt="" />
                            </a>
                            <a href="#"><img src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/online.png" alt="" />
                            </a>
                            <a href="#"><img src="	https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/qapida.png" alt="" />
                            </a>
                            <a href="#"><img src="	https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/2021/taksit_az.png" alt="" />
                            </a>

                        </div>
                        <div className="price d-flex justify-content-between">
                            <div className='col-6'>
                                <small>qiymət</small>
                                <p className='old-price'>{product.oldPrice}</p>
                                <p className='new-price'>{product.newPrice}</p>
                            </div>
                        </div>
                        <div className="calculator d-flex align-items-center justify-content-between flex-wrap">
                            <div className="col-md-6 col-12 calculator-left-part ">
                                <h3>Kredit Kalkulyatoru</h3>
                                <div className="calculator-body">

                                    <input type="range" min="6" max="24" step="3" onChange={handleChange} value={message} />
                                    <div className={name}></div>
                                    <ul className="d-flex">

                                        <li>6</li>
                                        <li>9</li>
                                        <li>12</li>
                                        <li>15</li>
                                        <li>18</li>
                                        <li>21</li>
                                        <li>24</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-12 calculator-right-part">


                                <div className="kart d-flex align-items-center">
                                    <img src="https://kontakt.az/wp-content/uploads/2022/09/birbank.png" alt="img" />
                                    <p><strong>{Math.round(product.newPrice / 18) - 0.01} </strong>dan</p>
                                </div>
                                <div className="month d-flex align-items-center">
                                    <div className='col-6'>Ilkin ödəniş <br />0</div>
                                    <div className='col-6'>Aylıq ödəniş <br />{count ? count : Math.round(product.newPrice / 6) - 0.01} </div>
                                </div>

                            </div>
                        </div>
                        <div className=" col-12 btns">
                            <button className="red"> Bir kliklə al </button>
                            <button> Nağd al </button>
                            <button> Hissə - hissə al </button>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default ProductDetail
