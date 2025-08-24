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