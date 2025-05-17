import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Slider = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                            'url(./hero-section.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        New Arrivals Just Dropped
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Fresh Looks for the Season
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Explore the latest trends in fashion with our brand-new collection for men and women.
                            From streetwear to classy fits, get your hands on this season’s top picks before they’re gone.
                            Limited stock. Shop now and stay ahead.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        50% Off Summer Sale
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Limited Time Only
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Save big on selected styles across all categories. From activewear to accessories,
                            enjoy up to 50% off. Offer valid while supplies last. Don’t miss your chance to grab the hottest deals.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Join & Get 10% Off
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Sign Up for Exclusive Deals
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Become a member today and enjoy 10% off your first purchase.
                            Plus, get access to early releases, members-only discounts, and personalized recommendations.
                            Sign up is fast and free!
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Slider
