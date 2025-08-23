export { }
declare global {
    interface VocabularyRequest {
        userId?: number;
        password?: string;
        rePassword?: string;
        phone?: string;
        avatar?: string;
        fullname?: string;
        email?: string;
        gender?: string;
        dob?: string;
    }
}