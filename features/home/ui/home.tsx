
import HomeAuthors from './home.authors';
import HomeBookElement from './home.book.element';
import HomeBooks from './home.books';
import HomeCourseElement from './home.course.element';

const Home = (props: {
    items: ICourse[]
    books: IBook[]
    authors: IAuthor[]
}) => {
    const { items, books, authors } = props;
    return (
        <div>
            <p className='font-semibold mb-3 text-gray-600-gray-400 pl-4.5'>Gần đây</p>

            <div className='grid grid-cols-2'>
                {items.map(course => {
                    return (
                        <HomeCourseElement course={course} key={course.id} />
                    )
                })}

            </div>

            <HomeBooks books={books} />
            {/* <div className='flex whitespace-nowrap justify-center gap-10 p-4'>
                {books.map(book => (
                    <HomeBookElement book={book} key={book.id} />
                ))}

            </div> */}

            <HomeAuthors authors={authors} />
        </div>
    )
}

export default Home