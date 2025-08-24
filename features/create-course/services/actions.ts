'use server'

import { sendRequest } from "@/utils/fetch.api";

export async function createCourse(
    questions: IQuestion[],
    prevState: any,
    formData: FormData
): Promise<CreateCourseValidateResponse> {
    const title = formData.get("title")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    const questionsValidateResponse: SingleQuestionValidateResponse[] = questions.map(question => {
        const questionResponse: SingleQuestionValidateResponse = {
            id: question.id,
            terminology: { isError: false, value: question.terminology },
            define: { isError: false, value: question.define }
        };

        if (question.terminology.trim() !== "" && question.define.trim() === "") {
            questionResponse.define.isError = true;
            questionResponse.define.errorMessage = "Vui lòng không để trống định nghĩa!";
        } else if (question.terminology.trim() === "" && question.define.trim() !== "") {
            questionResponse.terminology.isError = true;
            questionResponse.terminology.errorMessage = "Vui lòng không để trống thuật ngữ!";
        }

        return questionResponse;
    });

    const hasTitle = title.trim() !== "";
    const hasError = questionsValidateResponse.some(q => q.terminology.isError || q.define.isError);
    const hasValidQuestion = questions.some(question => question.define.trim() !== "" && question.terminology.trim() !== "");

    const valid = hasTitle && hasValidQuestion && !hasError;

    const result: CreateCourseValidateResponse = {
        title: {
            isError: !hasTitle,
            value: title,
            errorMessage: !hasTitle ? "Tiêu đề không được để trống!" : undefined
        },
        description,
        questions: questionsValidateResponse,
        hasAtLeast1ValidQuestion: hasValidQuestion
    };

    if (valid) {
        const courseRequest: CourseRequest<number> = {
            title,
            description,
            cards: questionsValidateResponse.map(response => ({
                terminology: String(response.terminology.value || ""),
                define: String(response.define.value || "")
            }))
        };
        console.log(">>>> check req: ", courseRequest);
        const response = await sendRequest<ApiResponse<CourseResponse>>({
            url: '/v1/courses',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: courseRequest
        });
        console.log(">>> check response: ", response);
    }

    return result;
}
