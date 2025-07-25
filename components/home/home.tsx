import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
const HomePageComponent = (props: {
    items: any | null
    books: any | null
}) => {
    const { items, books } = props;
    return (
        <div className='ml-2'>
            <p className='font-semibold mb-4 mt-4 text-[var(--color-twilight-500-twilight-300)]'>Gần đây</p>
            <div className='grid grid-cols-2 gap-4'>
                {items.map((item: any, index: any) => (
                    <div key={index} className='flex gap-4 '>
                        <div className='text-[var(--color-gray-100-twilight-500)]'>
                            <SchoolIcon />
                        </div>
                        <div>
                            <p className='font-medium'>{item.title}</p>
                            <p>Học phần ・ {item.terms} terms ・ Tác giả: {item.author}</p>
                        </div>
                    </div>
                ))}

            </div>

            <p className='font-semibold mb-4 mt-8 text-[var(--color-twilight-500-twilight-300)]'>Sách giáo khoa phổ biến</p>
            <div className='flex whitespace-nowrap justify-center gap-10 p-4'>
                {books.map((book: any, index: any) => (
                    <div key={index} className='flex items-center gap-4 border border-e-white rounded-lg' >
                        <div className='m-1'>
                            <img src={book.image} alt="" className='rounded-2xl w-16 h-24' />
                        </div>
                        <div className='text-sm leading-6 p-2'>
                            <p className='font-medium'>{book.title}</p>
                            <p >{book.edition}st Edition</p>
                            <p className='font-bold '>{book.author}   Giáo viên</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HomePageComponent