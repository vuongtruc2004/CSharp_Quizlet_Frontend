import Course from "@/features/course/ui/course"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Học phần của bạn',
}

const YourCoursePage = () => {
    return (
        <Course />
    )
}

export default YourCoursePage