import CreateCourse from "@/features/create-course/ui/main/create.course";
import { CreateCourseWrapper } from "@/wrapper/create-course/create.course.wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Tạo học phần mới',
}

const CreateCoursePage = () => {
    return (
        <CreateCourseWrapper>
            <CreateCourse />
        </CreateCourseWrapper>
    )
}

export default CreateCoursePage