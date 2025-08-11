import CourseList from "./course.list"
import CourseSearchBox from "./course.search.box"
import CourseSort from "./course.sort"

const Course = () => {
    return (
        <div className="pl-4.5">
            <div className="flex items-center justify-between mb-10">
                <CourseSort />
                <CourseSearchBox />
            </div>
            <CourseList />
        </div>
    )
}

export default Course