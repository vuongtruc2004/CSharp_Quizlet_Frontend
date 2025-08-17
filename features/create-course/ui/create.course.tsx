'use client'
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import CreateCourseHeader from "./create.course.header";
import CreateCourseQuestions from "./create.course.questions"
import ScrollToTopButton from "@/components/scroll-button/scroll.to.top.button";

const CreateCourse = () => {
    const { formAction } = useCreateCourse();

    return (
        <form action={formAction} className="h-full relative">
            <CreateCourseHeader />
            <CreateCourseQuestions />
            <ScrollToTopButton />
        </form>
    )
}

export default CreateCourse