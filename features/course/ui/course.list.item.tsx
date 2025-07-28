import { Avatar, Divider } from "@mui/material"
import Link from "next/link"

const CourseListItem = () => {
    return (
        <Link href={"/course"} className="px-5 py-3 rounded-sm bg-gray-100-gray-700 transition-all duration-300 border-b-4 border-gray-100-gray-700 hover:border-twilight-500-twilight-300">
            <div className="flex items-center gap-x-3">
                <p className="font-bold text-sm">283 thuật ngữ</p>

                <Divider orientation="vertical" flexItem sx={{ borderWidth: '1px', borderColor: 'var(--color-gray-200-gray-900)' }} />

                <div className="flex items-center gap-x-2">
                    <Avatar sx={{ width: '16px', height: '16px', fontSize: '12px' }}>N</Avatar>
                    <h2 className="font-semibold text-sm text-gray-800-gray-400">Kurayami259</h2>
                    <span className="bg-twilight-100-gray-600 text-gray-700-gray-200 rounded-full px-2 text-[0.75rem] font-semibold">Giáo viên</span>
                </div>
            </div>

            <h1 className="font-bold text-xl">Part 9.2</h1>
        </Link>
    )
}

export default CourseListItem