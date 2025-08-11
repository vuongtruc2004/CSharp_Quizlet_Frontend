'use client'
import HomeBookElement from './home.book.element';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import NavigationButtons from '@/components/swiper-js/navigation.buttons';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';

const HomeBooks = ({ books }: { books: IBook[] }) => {
    const sliderRef = useRef<SwiperType>(null);

    return (
        <div className='pl-4.5'>
            <p className='font-semibold mt-3 mb-7'>Sách giáo khoa phổ biến</p>

            <Box sx={{
                '.swiper': {
                    overflow: 'visible'
                },
                '.swiper-pagination': {
                    bottom: '-30px'
                },
                '.swiper-pagination-bullet': { width: '20px', height: '8px', borderRadius: '20px', transition: 'all .3s', background: 'var(--color-gray-800-gray-200)' },
                '.swiper-pagination-bullet-active': { width: '24px', background: 'var(--color-gray-100-twilight-500)' },
                position: 'relative'
            }} className='group/parent'>
                <Swiper
                    style={{ width: '100%' }}
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: true, waitForTransition: true }}
                    onBeforeInit={(swiper) => {
                        sliderRef.current = swiper;
                    }}
                >
                    {books.map(book => {
                        return (
                            <SwiperSlide key={book.id}>
                                <HomeBookElement book={book} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <NavigationButtons sliderRef={sliderRef} />
            </Box>
        </div>
    )
}

export default HomeBooks