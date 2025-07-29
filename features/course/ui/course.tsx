import CourseList from "./course.list"
import CourseSearchBox from "./course.search.box"
import CourseSort from "./course.sort"

const Course = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl">Học phần của bạn</h1>
            <div className="flex items-center justify-between my-10">
                <CourseSort />
                <CourseSearchBox />
            </div>
            <CourseList />
        </div>
    )
}

export default Course