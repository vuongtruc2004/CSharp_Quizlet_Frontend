'use client'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HomeAuthorElement from './home.author.element'

const HomeAuthors = ({ authors }: { authors: IAuthor[] }) => {
    return (
        <div className='w-[1200px] mb-10'>
            <p className='font-medium mt-10 mb-3 text-gray-600-gray-400 pl-4.5'>Tác giả hàng đầu</p>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true} modules={[Navigation]} className="mySwiper w-[1200px]"
            >
                {authors.map(author => {
                    return (
                        <SwiperSlide key={author.id}>
                            <HomeAuthorElement author={author} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default HomeAuthors