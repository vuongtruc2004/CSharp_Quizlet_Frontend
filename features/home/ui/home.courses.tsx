import HomeCourseElement from "./home.course.element"

const HomeCourse = ({ courses }: { courses: ICourse[] }) => {
    return (
        <>
            <p className='font-semibold mb-3 text-gray-600-gray-400 pl-4.5'>Gần đây</p>

            <div className='grid grid-cols-2'>
                {courses.map(course => {
                    return (
                        <HomeCourseElement course={course} key={course.id} />
                    )
                })}
            </div>
        </>
    )
}

export default HomeCourse