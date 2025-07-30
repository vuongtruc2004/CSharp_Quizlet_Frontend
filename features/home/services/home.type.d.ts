interface ICourse {
    id: number,
    title: string,
    terms: number,
    author: string
}

interface IBook {
    id: number,
    title: string,
    author: string,
    edition: number,
    image: string
}

interface IAuthor {
    id: number,
    name: string,
    course: number,
    avatar: string
}