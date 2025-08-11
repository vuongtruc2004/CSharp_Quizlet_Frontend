'use client'
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { LOGIN_IMAGE_SLIDER } from '../services/login.constants';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';

const LoginSlider = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            overflowX: 'hidden',
            '.swiper-pagination-bullet': { width: '30px', height: '8px', borderRadius: '20px', transition: 'all .3s', background: 'var(--color-gray-800-gray-200)' },
            '.swiper-pagination-bullet-active': { width: '40px', background: 'var(--color-gray-100-twilight-500)' },
        }}>
            <div className="bg-black relative w-full h-full">
                <Link href={"/home"} className="z-10 text-gray-800-gray-200 absolute top-5 right-5 rounded-full bg-twilight-100-gray-600 text-[12px] px-3 py-1 flex items-center gap-x-2 font-semibold">
                    Trở về trang chủ
                    <EastIcon sx={{ fontSize: '1rem' }} />
                </Link>

                <Swiper
                    style={{ width: '100%' }}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: true, waitForTransition: true }}
                    loop={true}
                >
                    {LOGIN_IMAGE_SLIDER.map(image => {
                        return (
                            <SwiperSlide key={image.id}>
                                <div className='w-full h-screen flex items-center justify-center'>Slide {image.id}</div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Box>
    )
}

export default LoginSlider