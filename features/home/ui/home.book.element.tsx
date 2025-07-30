import React from 'react'

const HomeBookElement = ({ book }: { book: IBook }) => {
    return (
        <div className='flex h-30 bg-gray100-grayException750 items-center gap-4 border border-e-white rounded-lg' >
            <div className='m-1'>
                <img src={book.image} alt="" className='rounded-lg w-16 h-24' />
            </div>
            <div className='text-sm leading-6 p-2'>
                <p className='font-medium'>{book.title}</p>
                <p >{book.edition}st Edition</p>
                <div className='font-bold flex justify-center gap-2'>{book.author}   <p className='bg-gray-300-gray-600 rounded-xl w-20 text-center'>Giáo viên</p></div>
            </div>
        </div>
    )
}

export default HomeBookElement