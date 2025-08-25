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

interface UserResponse {
    id: string;
    email: string;
    fullName: string;
    avatar: string;
}

interface TokenResponse {
    accessToken: string;
    refreshToken: string;
}