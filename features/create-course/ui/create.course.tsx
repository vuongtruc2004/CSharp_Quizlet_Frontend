'use client'
import ScrollToTopButton from "@/components/scroll-button/scroll.to.top.button";
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import CreateCourseHeader from "./create.course.header";
import CreateCourseQuestions from "./create.course.questions";

const CreateCourse = ({ course }: { course: CourseResponse }) => {
    const { formAction } = useCreateCourse();

    return (
        <form action={formAction} className="h-full relative">
            <CreateCourseHeader course={course} />
            <CreateCourseQuestions />
            <ScrollToTopButton />
        </form>
    )
}

export default CreateCourse