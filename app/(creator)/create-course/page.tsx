import CreateCourse from "@/features/create-course/ui/create.course";
import { sendRequest } from "@/utils/fetch.api";
import { CreateCourseWrapper } from "@/wrapper/create-course/create.course.wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Tạo học phần mới',
}

const CreateCoursePage = async () => {
    const response = await sendRequest<ApiResponse<CourseResponse>>({
        url: `/v1/courses/initial`,
        method: 'POST'
    });

    if (response.statusCode !== 200) {
        throw new Error(response.userMessage);
    }

    return (
        <CreateCourseWrapper>
            <CreateCourse course={response.data} />
        </CreateCourseWrapper>
    )
}

export default CreateCoursePage