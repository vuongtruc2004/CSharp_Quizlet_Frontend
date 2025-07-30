
import HomeAuthors from './home.authors';
import HomeBooks from './home.books';
import HomeCourseElement from './home.course.element';

const Home = ({ items, books, authors }: {
    items: ICourse[]
    books: IBook[]
    authors: IAuthor[]
}) => {
    return (
        <div className='w-full'>
            <p className='font-semibold mb-3 text-gray-600-gray-400 pl-4.5'>Gần đây</p>

            <div className='grid grid-cols-2'>
                {items.map(course => {
                    return (
                        <HomeCourseElement course={course} key={course.id} />
                    )
                })}
            </div>

            <HomeBooks books={books} />
            <HomeAuthors authors={authors} />
        </div>
    )
}

export default Home