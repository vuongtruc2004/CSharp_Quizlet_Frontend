interface IQuestion {
    id: number,
    terminology: string,
    define: string
}

interface SingleQuestionValidateResponse {
    id: number;
    terminology: ErrorResponse;
    define: ErrorResponse;
}

interface CreateCourseValidateResponse {
    title: ErrorResponse;
    description: string;
    questions: SingleQuestionValidateResponse[];
    isHaveAtLeast1ValidQuestion: boolean;
}