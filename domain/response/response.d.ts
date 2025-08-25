
interface ErrorResponse {
    isError: boolean;
    errorMessage?: string;
    value?: string | object[] | object;
}

interface ApiResponse<T> {
    statusCode: number;
    devMessage: string;
    userMessage?: string;
    data: T;
}

interface PageDetailsResponse<T> {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    content: T;
}

interface BaseResponse<TKey> {
    id: TKey,
    createdBy: string;
    createdAt: string,
    updatedBy: string;
    updatedAt: string,
}

interface CourseResponse extends BaseResponse<number> {
    title: string;
    description: string;
    fullname: string;
    cards: CardResponse[];
}

interface CardResponse extends BaseResponse<number> {
    terminology: string;
    define: string;
}

interface AnswerResponse extends BaseResponse<number> {
    content: string;
    isCorrect: boolean;
}

interface QuestionResponse extends BaseResponse<number> {
    title: string;
    questionStatus: string;
    answers: AnswerResponse[];
}

interface QuizResponse extends BaseResponse<number> {
    totalCompletedQuestions: number;
    currentQuestionIndex: number;
    questions: QuestionResponse[];
    courseId: number;
    courseTitle: string;
}

 interface VocabularyResponse extends BaseResponse<number> {
        kanji?: string;
        japanese: string;
        vietnamese: string;
        sinoVietnamese?: string;
        isMarked: boolean;
        vocabularyType: string;
        note?: string;
        lessonNumber: number;
        lessonId: number;
}

interface LessonResponse extends BaseResponse<number>{
        lessonNumber: number; 
        chapterId: number; 
}

