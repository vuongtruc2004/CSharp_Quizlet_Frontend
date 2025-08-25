'use server'

import { sendRequest } from "@/utils/fetch.api";

export const getQuizByCourseId = async (courseId: string): Promise<ApiResponse<QuizResponse>> => {
    const response = await sendRequest<ApiResponse<QuizResponse>>({
        url: `/v1/quizzes/${courseId}`,
    });
    if (response.statusCode !== 200) {
        throw new Error(response.userMessage);
    }

    return response;
}