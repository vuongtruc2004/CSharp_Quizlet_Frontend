import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
import { useState } from 'react';
import FlashCardIcons from './flash.card.icons';

const FlashCardElement = ({ card }: { card: CardResponse }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`cursor-pointer transition-all duration-300 relative ${isFlipped && "rotate-x-180"} w-full`} style={{ transformStyle: 'preserve-3d', aspectRatio: 16 / 7 }} onClick={() => setIsFlipped(prev => !prev)}>
            <div className="backface-hidden text-gray-800-gray-200 bg-gray-200-gray-700 rounded-lg absolute w-full px-8 py-6 flex flex-col" style={{ aspectRatio: 16 / 7 }}>
                <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-x-3'>
                        <LightbulbOutlineIcon sx={{ fontSize: '1rem' }} />
                        <span className='text-sm font-bold'>Hiển thị gợi ý</span>
                    </p>

                    <div className='flex items-center gap-x-3'>
                        <FlashCardIcons />
                    </div>
                </div>
                <div className='flex items-center justify-center text-5xl flex-1'>{card.terminology}</div>
            </div>

            <div className="rotate-x-180 backface-hidden text-gray-800-gray-200 bg-gray-200-gray-700 rounded-lg absolute w-full px-8 py-6 flex flex-col" style={{ aspectRatio: 16 / 7 }}>
                <div className='flex justify-end gap-x-3 items-center'>
                    <FlashCardIcons />
                </div>
                <div className='flex items-center justify-center text-5xl flex-1'>{card.define}</div>
            </div>
        </div>
    )
}

export default FlashCardElement