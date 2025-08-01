import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { RefObject, useCallback } from 'react';
import { Swiper as SwiperType } from 'swiper';

const NavigationButtons = ({ sliderRef }: { sliderRef: RefObject<SwiperType | null> }) => {
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.slideNext();
    }, []);

    return (
        <>
            <div className="opacity-0 group-hover/parent:opacity-100 z-10 bg-gray200-twilight900 absolute top-1/2 left-0 -translate-1/2 transition-all duration-200 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300-gray-700 hover:bg-gray-300-gray-800" onClick={handlePrev}>
                <ChevronLeftIcon />
            </div>

            <div className="opacity-0 group-hover/parent:opacity-100 z-10 bg-gray200-twilight900 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 transition-all duration-200 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300-gray-700 hover:bg-gray-300-gray-800" onClick={handleNext}>
                <ChevronRightIcon />
            </div>
        </>
    )
}

export default NavigationButtons