'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import HomeBookElement from './home.book.element';

import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const HomeBooks = ({ books }: { books: IBook[] }) => {
    return (
        <div className='w-[1200px]  '>
            <p className='font-semibold mt-10 mb-3 text-gray-600-gray-400 pl-4.5'>Sách giáo khoa phổ biến</p>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true} modules={[Navigation]} className="mySwiper w-[1200px]"
            >
                {books.map(book => {
                    return (
                        <SwiperSlide key={book.id}>
                            <HomeBookElement book={book} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default HomeBooks