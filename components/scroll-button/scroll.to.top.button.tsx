import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
    return (
        <span className='fixed bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-200-gray-700 bg-gray200-twilight900'>
            <ArrowUpwardIcon sx={{ fontSize: '1rem' }} />
        </span>
    )
}

export default ScrollToTopButton