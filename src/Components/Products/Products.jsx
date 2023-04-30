import React, { useState, } from 'react'
import './Products.scss'
import '../../Style/grid.scss'
import { productsData } from '../../ProductsData'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductDetail from '../ProductDetail/ProductDetail';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (i) => {
        setSelectedProduct(productsData[i]);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedProduct(null);
        setOpen(false);
    };
    
    return (
        <div className="product">
            <div className="container-fluid container-xl">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={4.5}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    pagination={{ clickable: true }}

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
                        1200: {
                            slidesPerView: 4.5
                        },
                    }}
                >
                    {
                        productsData.map((data, index) => {

                            return (<SwiperSlide> <div className=" product-item" onClick={() => handleOpen(index)} >

                                <div className="product-item-body"  >
                                    <img src={data.littleSrc} alt="img" />
                                    <h2>{data.title} </h2>
                                    <p className="precent">0 0% 18ay</p>
                                    <div className="shop">
                                        <div className="prize">
                                            <p className="old-prize">{data.oldPrice}</p>
                                            <p className='new-prize'>{data.newPrice}</p>
                                        </div>
                                        <div className="button">
                                            <button>Səbətə at</button>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>)

                        })
                    }
                    { }

                </Swiper>
                <div className="allOffer">
                    <a href="#">Bütün təklifləri gör</a>

                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <ProductDetail product={selectedProduct} />
            </Modal>

        </div>
    )
}

export default Products
