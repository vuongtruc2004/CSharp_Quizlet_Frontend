import CreateCourseHeader from "./create.course.header"
import CreateCourseQuestions from "./create.course.questions"
import CreateCourseTitle from "./create.course.title"

const CreateCourse = () => {
    return (
        <div className="h-full">
            <CreateCourseHeader />
            <CreateCourseTitle />
            <CreateCourseQuestions />
        </div>
    )
}

export default CreateCourse