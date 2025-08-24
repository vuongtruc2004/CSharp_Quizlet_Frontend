'use client'
import ScrollToTopButton from "@/components/scroll-button/scroll.to.top.button";
import { sendRequest } from "@/utils/fetch.api";
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import { useEffect } from "react";
import { toast } from "react-toastify";
import CreateCourseHeader from "./create.course.header";
import CreateCourseQuestions from "./create.course.questions";

const CreateCourse = () => {
    const { formAction, state, questions, setLoading } = useCreateCourse();
    useEffect(() => {
        if (state && state.isValid) {
            setLoading(true);
            const createCourse = async () => {
                const courseRequest: CourseRequest<number> = {
                    title: String(state.title.value || ""),
                    description: state.description,
                    cards: questions.map(question => ({
                        terminology: question.terminology,
                        define: question.define
                    }))
                };
                const response = await sendRequest<ApiResponse<CourseResponse>>({
                    url: '/v1/courses',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: courseRequest
                });
                if (response.statusCode === 201) {
                    toast.success(response.userMessage, {
                        autoClose: 1200,
                        hideProgressBar: true,
                        theme: 'colored'
                    });
                } else {
                    toast.error(response.userMessage, {
                        autoClose: 1200,
                        hideProgressBar: true,
                        theme: 'colored'
                    });
                }
            }
            createCourse();
            setLoading(false);
        }
    }, [state]);

    return (
        <form action={formAction} className="h-full relative">
            <CreateCourseHeader />
            <CreateCourseQuestions />
            <ScrollToTopButton />
        </form>
    )
}

export default CreateCourse