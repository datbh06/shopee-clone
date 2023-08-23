import React from 'react';
import Card from "./Card.jsx";

const CarouselComponent = () => {
    const data = {
        imgSrc: "https://media3.scdn.vn/img4/2022/10_24/F03SLQl1r703cohEitFY.png",
        title: "Nồi cơm áp suất đa năng Elmich PCE-1806 (5L)",
        oldPrice: "2.690.000đ",
        discount: "-31%",
        newPrice: "1.868.000đ"
    };
    return (<div className="swiper swiper-horizontal">
        <div className="swiper-wrapper flex"
             style={{transitionDuration: "0ms", transform: "translate3d(12px, 0px, 0px)"}}>
            <div className="swiper-slide swiper-slide-active"
                 style={{width: "125px", height: "100%", marginRight: "8px"}}>
                <a href="/">
                    <div className="">
                        <div className="">
                            <Card {...data} />
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide swiper-slide-active"
                 style={{width: "125px", height: "100%", marginRight: "8px"}}>
                <a href="/">
                    <div className="">
                        <div className="">
                            <Card {...data} />
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide swiper-slide-active"
                 style={{width: "125px", height: "100%", marginRight: "8px"}}>
                <a href="/">
                    <div className="">
                        <div className="">
                            <Card {...data} />
                        </div>
                    </div>
                </a>
            </div>

        </div>

    </div>)
};
export default CarouselComponent;
