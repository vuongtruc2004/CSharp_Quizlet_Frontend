'use server'
import { sendRequest } from "@/utils/fetch.api";

export const getCourseById = async (id: string): Promise<ApiResponse<CourseResponse>> => {
    const response = await sendRequest<ApiResponse<CourseResponse>>({
        url: `/v1/courses/${id}`
    });

    if (response.statusCode !== 200) {
        throw new Error(response.userMessage);
    }

    return response;
}