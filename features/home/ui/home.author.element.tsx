import CardIcon from '@/components/quizlet-icon/card.icon'
import { Avatar } from '@mui/material'

const HomeAuthorElement = ({ author }: { author: IAuthor }) => {
    return (
        <div className='relative group border border-gray-300-gray-700 bg-gray100-grayException750 rounded-lg p-4'>
            <Avatar src={author.avatar} alt={author.name} sx={{ width: '64px', height: '64px' }}>
                N
            </Avatar>

            <p className='font-bold text-xl text-gray-800-gray-400 my-4.5'>{author.name}</p>

            <div className='flex justify-center items-center gap-x-2 bg-gray-300-gray-600 rounded-lg px-2 w-max'>
                <CardIcon size={16} />
                <p className='font-bold text-[12px]'>{author.course} học phần</p>
            </div>

            <span className='opacity-0 w-full h-1 rounded-b-lg bg-twilight-500-twilight-300 right-0 bottom-0 group-hover:opacity-100 absolute' />
        </div>
    )
}

export default HomeAuthorElement