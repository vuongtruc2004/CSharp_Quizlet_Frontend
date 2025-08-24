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