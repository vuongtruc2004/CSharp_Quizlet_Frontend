import Link from "next/link"

const HomeBookElement = ({ book }: { book: IBook }) => {
    return (
        <Link href={"/"} className='group relative flex h-30 bg-gray100-grayException750 items-center gap-4 border border-gray-300-gray-700 rounded-lg py-1 px-2' >
            <div className='m-1'>
                <img src={book.image} alt="" className='rounded-lg w-16 h-24' />
            </div>
            <div className='text-sm leading-6 p-2'>
                <p className='font-medium'>{book.title}</p>
                <p >{book.edition}st Edition</p>
                <div className='font-bold flex justify-center gap-2'>{book.author}   <p className='bg-gray-300-gray-600 rounded-xl w-20 text-center'>Giáo viên</p></div>
            </div>

            <span className="opacity-0 w-full h-1 bg-twilight-500-twilight-300  rounded-b-lg absolute left-0 bottom-0 group-hover:opacity-100 transition-all duration-200" />
        </Link>
    )
}

export default HomeBookElement