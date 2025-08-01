'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HomeAuthorElement from './home.author.element'
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import NavigationButtons from '@/components/swiper-js/navigation.buttons';

const HomeAuthors = ({ authors }: { authors: IAuthor[] }) => {
    const sliderRef = useRef<SwiperType>(null);

    return (
        <div className='pl-4.5'>
            <p className='font-semibold my-7 text-gray-600-gray-400'>Tác giả hàng đầu</p>

            <div className='relative group/parent'>
                <Swiper
                    style={{
                        width: '100%'
                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true} modules={[Navigation]}
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
            </div>
        </div>
    )
}

export default HomeAuthors