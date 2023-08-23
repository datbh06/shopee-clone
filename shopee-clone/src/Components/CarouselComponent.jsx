import React from 'react';
import Card from "./Card.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {Navigation, A11y} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const CarouselComponent = () => {
    const data = {
        imgSrc: "https://media3.scdn.vn/img4/2022/10_24/F03SLQl1r703cohEitFY.png",
        title: "Nồi cơm áp suất đa năng Elmich...",
        oldPrice: "2.690.000đ",
        discount: "-31%",
        newPrice: "1.868.000đ"
    };
    return (<div>
        <div>
            <a href="/">
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={10}
                    slidesPerView={3.5}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{
                        "--swiper-navigation-color": "#3f4b53",
                        "--swiper-navigation-size": "20px",
                        "--swiper-navigation-background": "white"
                    }}
                >
                    <SwiperSlide> <Card {...data} /></SwiperSlide>
                    <SwiperSlide> <Card {...data} /></SwiperSlide>
                    <SwiperSlide> <Card {...data} /></SwiperSlide>
                    <SwiperSlide> <Card {...data} /></SwiperSlide>
                    <SwiperSlide> <Card {...data} /></SwiperSlide>
                    <SwiperSlide> <Card {...data} /></SwiperSlide>
                </Swiper>
            </a>

        </div>

    </div>)
};
export default CarouselComponent;
