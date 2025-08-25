'use client'
import ScrollToTopButton from "@/components/scroll-button/scroll.to.top.button";
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import CreateCourseHeader from "./create.course.header";
import Questions from "./questions";

const CreateCourse = () => {
    const { formAction, state } = useCreateCourse();
    const { push } = useRouter();

    useEffect(() => {
        const response = state?.response;
        if (response) {
            if (response.statusCode === 201) {
                toast.success(response.userMessage, {
                    autoClose: 1200,
                    hideProgressBar: true,
                    theme: "colored"
                });
                push("/your-course");

            } else {
                toast.error(response.userMessage, {
                    autoClose: 1200,
                    hideProgressBar: true,
                    theme: "colored"
                });
            }
        }
    }, [state]);

    return (
        <form action={formAction} className="h-full relative">
            <CreateCourseHeader />
            <Questions />
            <ScrollToTopButton />
        </form>
    )
}

export default CreateCourse