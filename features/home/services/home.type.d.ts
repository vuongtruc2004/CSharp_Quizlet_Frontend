interface ICourse {
    id: number,
    title: string,
    description: string,
    authorName: string
}

interface IBook {
    id: number,
    japaneseTitle: string,
    vietnameseTitle: string,
    description: string,
    authorName: string,
    thumbnail: string
}

interface IAuthor {
    id: number,
    fullName: string,
    // NumberOfCreatedCourses: number,
    avatar: string
}