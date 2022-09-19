import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"

import 'swiper/css';
import "swiper/css/navigation";

import { Navigation } from "swiper"

const Carousel = () => {
    return (
        <div className='xl:px-20 py-5'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" breakpoints={{
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                375: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                425: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 10,
                    spaceBetween: 35,
                },
                1024: {
                    slidesPerView: 14,
                    spaceBetween: 20,
                },
            }}>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center hover:border-b-2 transition-all duration-100 ease-in-out cursor-pointer'>
                        <Image src="/cityscape.png" height={24} width={24} />
                        <p>Város</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 18</SwiperSlide>
                <SwiperSlide>Slide 19</SwiperSlide>
                <SwiperSlide>Slide 20</SwiperSlide>
                <SwiperSlide>Slide 21</SwiperSlide>
                <SwiperSlide>Slide 22</SwiperSlide>
                <SwiperSlide>Slide 23</SwiperSlide>
                <SwiperSlide>Slide 24</SwiperSlide>
                <SwiperSlide>Slide 25</SwiperSlide>
                <SwiperSlide>Slide 26</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel