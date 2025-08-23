export { }
declare global {
    interface VocabularyResponse {
        id: number;
        kanji?: string;
        japanese: string;
        vietnamese: string;
        sinoVietnamese?: string;
        isMarked: boolean;
        vocabularyType: string;
        note?: string;
        lessonNumber: number;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
    }

      interface ApiResponse<T> {
        status: number;
        errorMessage: string;
        message: object;
        data: T;
    }
   
}