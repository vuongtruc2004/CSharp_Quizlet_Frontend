import CourseList from "@/features/course/ui/course.list";
import CourseSearchBox from "@/features/course/ui/course.search.box";
import CourseSort from "@/features/course/ui/course.sort";
import { sendRequest } from "@/utils/fetch.api";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Học phần của bạn',
}

const YourCoursePage = async ({ searchParams }: { searchParams: Promise<{ pageNumber?: number, pageSize?: number }> }) => {
    const pageNumber = (await searchParams).pageNumber || 1;
    const pageSize = (await searchParams).pageSize || 6;

    const response = await sendRequest<ApiResponse<PageDetailsResponse<CourseResponse[]>>>({
        url: '/v1/courses',
        queryParams: {
            pageNumber,
            pageSize
        }
    });

    if (response.statusCode !== 200) {
        throw new Error(response.userMessage);
    }

    return (
        <div className="pl-4.5">
            <div className="flex items-center justify-between mb-10">
                <CourseSort />
                <CourseSearchBox />
            </div>
            <CourseList page={response.data} />
        </div>
    )
}

export default YourCoursePage