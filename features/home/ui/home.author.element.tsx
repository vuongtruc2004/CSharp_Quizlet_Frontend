import CardIcon from '@/components/quizlet-icon/card.icon'
import React from 'react'

const HomeAuthorElement = ({ author }: { author: IAuthor }) => {
    return (
        <div className='border border-e-white bg-gray100-grayException750 rounded-lg' >
            <div className='m-3'>
                <img src={author.avatar} alt="" className='rounded-full w-15 ' />
            </div>
            <div className='text-sm leading-6 p-2'>

                <div className='flex gap-3 mb-3'>
                    <p className='font-bold ml-2'>{author.name}</p>
                    <p className='font-semibold bg-gray-500-gray-400 rounded-xl text-black w-20 text-center'>Giáo viên</p>
                </div>

                <div className='flex justify-center gap-2 bg-gray-300-gray-600 rounded-xl w-30'>
                    <CardIcon />
                    <p className='font-bold'>{author.course} học phần</p>
                </div>
            </div>
        </div>
    )
}

export default HomeAuthorElement