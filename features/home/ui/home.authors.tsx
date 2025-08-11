'use client'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HomeAuthorElement from './home.author.element'
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import NavigationButtons from '@/components/swiper-js/navigation.buttons';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';

const HomeAuthors = ({ authors }: { authors: IAuthor[] }) => {
    const sliderRef = useRef<SwiperType>(null);

    return (
        <div className='pl-4.5'>
            <p className='font-semibold mb-7 mt-8'>Tác giả hàng đầu</p>

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
                    autoplay={{ delay: 4000, disableOnInteraction: true, waitForTransition: true }}
                    onBeforeInit={(swiper) => {
                        sliderRef.current = swiper;
                    }}
                >
                    {authors.map(author => {
                        return (
                            <SwiperSlide key={author.id}>
                                <HomeAuthorElement author={author} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <NavigationButtons sliderRef={sliderRef} />
            </Box>
        </div>
    )
}

export default HomeAuthors