import CardIcon from '@/components/quizlet-icon/card.icon'
import Link from 'next/link'

const HomeCourseElement = ({ course }: { course: ICourse }) => {
    return (
        <Link href={"/"} className='transition-all duration-200 flex gap-4 items-center hover:bg-gray-200-gray-700 rounded-lg p-4'>
            <div className='w-10 h-10 rounded-lg bg-gray-200-gray-700 text-sky-400 flex justify-center items-center'>
                <CardIcon />
            </div>
            <div>
                <p className='font-medium'>{course.title}</p>
                <p>Học phần ・ {course.terms} terms ・ Tác giả: {course.author}</p>
            </div>
        </Link>
    )
}

export default HomeCourseElement