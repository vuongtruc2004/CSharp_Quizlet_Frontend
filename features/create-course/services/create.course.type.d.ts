interface IQuestion {
    id: string,
    terminology: string,
    define: string
}

interface SingleQuestionValidateResponse {
    id: string;
    terminology: ErrorResponse;
    define: ErrorResponse;
}

interface CreateCourseValidateResponse {
    title: ErrorResponse;
    description: string;
    questions: SingleQuestionValidateResponse[];
    hasAtLeast1ValidQuestion: boolean;
    response?: ApiResponse<CourseResponse>
}

interface ImportValidateResponse {
    isValid: boolean;
    data: ErrorResponse;
}