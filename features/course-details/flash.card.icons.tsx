import { CustomTooltip } from '@/components/mui-custom/custom.tooltip';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

const FlashCardIcons = () => {
    return (
        <>
            <CustomTooltip title="Chỉnh sửa">
                <span className='w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300-gray-800 cursor-pointer'>
                    <ModeEditOutlineOutlinedIcon sx={{ fontSize: '1rem' }} />
                </span>
            </CustomTooltip>

            <CustomTooltip title="Đọc">
                <span className='w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300-gray-800 cursor-pointer'>
                    <VolumeUpOutlinedIcon sx={{ fontSize: '1rem' }} />
                </span>
            </CustomTooltip>

            <CustomTooltip title="Lưu">
                <span className='w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300-gray-800 cursor-pointer'>
                    <StarOutlineOutlinedIcon sx={{ fontSize: '1rem' }} />
                </span>
            </CustomTooltip>
        </>
    )
}

export default FlashCardIcons