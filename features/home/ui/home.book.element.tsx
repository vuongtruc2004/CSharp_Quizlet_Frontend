import { Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const HomeBookElement = ({ book }: { book: IBook }) => {
    return (
        <Link href={"/"} className='group/child relative flex bg-gray100-grayException750 items-center gap-4 border border-gray-300-gray-700 rounded-lg px-2 py-3'>
            <Box sx={{
                height: '124px',
                aspectRatio: '3/4',
                position: 'relative'
            }}>
                <Image src={book.image} alt={book.title} fill className="rounded-lg" />
            </Box>

            <div className="flex-1">
                <h2 className='font-semibold line-clamp-2'>{book.title}</h2>

                <p className="font-bold text-[12px] text-gray-500-gray-400">{book.edition}st Edition</p>

                <div className='font-bold text-[12px] text-gray-500-gray-400'>{book.author}</div>
            </div>

            <span className="opacity-0 w-full h-1 bg-twilight-500-twilight-300  rounded-b-lg absolute left-0 bottom-0 group-hover/child:opacity-100 transition-all duration-200" />
        </Link>
    )
}

export default HomeBookElement