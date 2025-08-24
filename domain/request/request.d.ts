interface CourseRequest<TCourseKey> {
    id?: TCourseKey;
    title: string;
    description: string;
    cards: CardRequest<number>[];
}

interface CardRequest<TCardKey> {
    id?: TCardKey;
    terminology: string;
    define: string;
}
interface VocabularyRequest<TVocabularyKey> {
        id?: TVocabularyKey;
        japanese: string;
        vietnamese: string;
        kanji?: string;
        sinoVietnamese?: string;
        vocabularyType: number;
        note?: string;
        isMarked: boolean;
        lessonId?: number | null;
    }