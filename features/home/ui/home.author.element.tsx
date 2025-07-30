import CardIcon from '@/components/quizlet-icon/card.icon'
import React from 'react'

const HomeAuthorElement = ({ author }: { author: IAuthor }) => {
    return (
        <div className='relative group border  border-gray-300-gray-700 bg-gray100-grayException750 rounded-lg py-4 px-2' >
            <div className='m-3'>
                <img src={author.avatar} alt="" className='rounded-full w-15 ' />
            </div>

            <div className='text-sm leading-6'>
                <div className='flex gap-3 mb-3'>
                    <p className='font-bold ml-2'>{author.name}</p>
                    <p className='font-semibold bg-gray-500-gray-400 rounded-xl text-black w-20 text-center'>Giáo viên</p>
                </div>

                <div className='flex justify-center gap-2 bg-gray-300-gray-600 rounded-xl w-30'>
                    <CardIcon />
                    <p className='font-bold'>{author.course} học phần</p>
                </div>
            </div>

            <span className='opacity-0 w-full h-1 rounded-b-lg bg-twilight-500-twilight-300 right-0 bottom-0 group-hover:opacity-100 absolute' />
        </div>
    )
}

export default HomeAuthorElement