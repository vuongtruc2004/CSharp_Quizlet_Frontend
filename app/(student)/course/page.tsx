import CourseList from "@/components/course/ui/course.list"
import CourseSearchBox from "@/components/course/ui/course.search.box"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Học phần',
}

const CoursePage = () => {
    return (
        <div>
            <CourseSearchBox />
            <CourseList />
        </div>
    )
}

export default CoursePage