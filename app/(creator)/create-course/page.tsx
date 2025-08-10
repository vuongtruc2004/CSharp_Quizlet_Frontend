import CreateCourse from "@/features/create-course/create.course"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Tạo học phần mới',
}

const CreateCoursePage = () => {
    return (
        <CreateCourse />
    )
}

export default CreateCoursePage