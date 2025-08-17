interface ErrorResponse {
    isError: boolean;
    errorMessage?: string;
    value?: string | object[] | object;
}