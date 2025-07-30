import HomeAuthors from './home.authors';
import HomeBooks from './home.books';
import HomeCourse from './home.courses';

const Home = ({ courses, books, authors }: {
    courses: ICourse[]
    books: IBook[]
    authors: IAuthor[]
}) => {
    return (
        <>
            <HomeCourse courses={courses} />
            <HomeBooks books={books} />
            <HomeAuthors authors={authors} />
        </>
    )
}

export default Home