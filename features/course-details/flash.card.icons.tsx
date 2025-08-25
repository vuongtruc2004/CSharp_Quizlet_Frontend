'use client'
import { CustomTooltip } from '@/components/mui-custom/custom.tooltip';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

const FlashCardIcons = ({ size, fontSize }: { size?: number, fontSize?: number }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            <CustomTooltip title="Chỉnh sửa">
                <span
                    onClick={handleClick}
                    className={`${size ? `w-${size} h-${size}` : 'w-8 h-8'} flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300-gray-800 cursor-pointer`}
                >
                    <ModeEditOutlineOutlinedIcon sx={{ fontSize: fontSize ? `${fontSize}rem` : '1rem' }} />
                </span>
            </CustomTooltip>

            <CustomTooltip title="Đọc">
                <span
                    onClick={handleClick}
                    className={`${size ? `w-${size} h-${size}` : 'w-8 h-8'} flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300-gray-800 cursor-pointer`}
                >
                    <VolumeUpOutlinedIcon sx={{ fontSize: fontSize ? `${fontSize}rem` : '1rem' }} />
                </span>
            </CustomTooltip>

            <CustomTooltip title="Lưu">
                <span
                    onClick={handleClick}
                    className={`${size ? `w-${size} h-${size}` : 'w-8 h-8'} flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300-gray-800 cursor-pointer`}
                >
                    <StarOutlineOutlinedIcon sx={{ fontSize: fontSize ? `${fontSize}rem` : '1rem' }} />
                </span>
            </CustomTooltip>
        </>
    );
};

export default FlashCardIcons;
