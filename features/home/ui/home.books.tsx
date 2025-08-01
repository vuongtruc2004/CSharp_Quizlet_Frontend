'use client'
import HomeBookElement from './home.book.element';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import NavigationButtons from '@/components/swiper-js/navigation.buttons';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const HomeBooks = ({ books }: { books: IBook[] }) => {
    const sliderRef = useRef<SwiperType>(null);

    return (
        <div className='pl-4.5'>
            <p className='font-semibold mt-3 mb-7 text-gray-600-gray-400'>Sách giáo khoa phổ biến</p>

            <div className='relative group/parent'>
                <Swiper
                    style={{ width: '100%' }}
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    loop={true}
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
            </div>
        </div>
    )
}

export default HomeBooks