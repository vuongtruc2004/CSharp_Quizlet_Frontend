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

interface LessonResponse extends BaseResponse<number> {
    lessonNumber: number;
    chapterId: number;
}

interface BookResponse extends BaseResponse<number> {
    japaneseTitle: string;
    vietnameseTitle: string;
    thumbnail: string;
    description: string;
}