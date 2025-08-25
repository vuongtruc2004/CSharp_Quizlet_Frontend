import LearnCourseProgressBar from "@/features/learn-course/learn.course.progress.bar";
import { Metadata } from "next";
import { getQuizByCourseId } from "./actions";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug;
    const id = slug.split("-").pop() || "";
    const response = await getQuizByCourseId(id);
    return {
        title: response.data.courseTitle,
    }
}

const LearnCoursePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug;
    const id = slug.split("-").pop() || "";
    const response = await getQuizByCourseId(id);

    return (
        <div>
            <LearnCourseProgressBar quiz={response.data} />
        </div>
    )
}

export default LearnCoursePage