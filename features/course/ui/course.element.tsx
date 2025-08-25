import { formatDateTime } from "@/utils/date.format"
import { slugifyText } from "@/utils/helpers"
import { Avatar, Divider } from "@mui/material"
import Link from "next/link"

const CourseElement = ({ course }: { course: CourseResponse }) => {
    return (
        <Link href={`/your-course/${slugifyText(course.title + "-" + course.id)}`} className="px-5 py-3 rounded-lg bg-gray-100-gray-700 transition-all duration-300 border-b-4 border-gray-100-gray-700 hover:border-twilight-500-twilight-300">
            <div className="flex items-center gap-x-3 mb-2">
                <p className="font-bold text-sm">{course.cards.length} thuật ngữ</p>

                <Divider orientation="vertical" flexItem sx={{ borderWidth: '1px', borderColor: 'var(--color-gray-200-gray-900)' }} />

                <div className="flex items-center gap-x-2">
                    <Avatar sx={{ width: '16px', height: '16px', fontSize: '12px' }}>{course.fullname.toUpperCase().charAt(0)}</Avatar>
                    <h2 className="font-semibold text-sm text-gray-800-gray-400">{course.fullname}</h2>
                    <span className="bg-twilight-100-gray-600 text-gray-800-gray-200 rounded-full px-2 text-[0.75rem] font-semibold">Giáo viên</span>
                </div>

                <Divider orientation="vertical" flexItem sx={{ borderWidth: '1px', borderColor: 'var(--color-gray-200-gray-900)' }} />
                <p className="font-bold text-sm">{formatDateTime(course.updatedAt ?? course.createdAt)}</p>
            </div>

            <h1 className="font-bold text-xl">{course.title}</h1>
        </Link>
    )
}

export default CourseElement