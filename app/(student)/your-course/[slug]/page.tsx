import ScrollToTopButton from "@/components/scroll-button/scroll.to.top.button";
import Cards from "@/features/course-details/cards";
import CourseDetailsHeader from "@/features/course-details/course.details.header";
import FlashCards from "@/features/course-details/flash.cards";
import { Metadata } from "next";
import { getCourseById } from "./actions";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug;
    const id = slug.split("-").pop() || "";
    const response = await getCourseById(id);
    return {
        title: response.data.title,
    }
}

const CourseDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug;
    const id = slug.split("-").pop() || "";
    const response = await getCourseById(id);

    console.log(">> ceck res: ", response);
    return (
        <div className="max-w-[1000px] mx-auto relative">
            <CourseDetailsHeader course={response.data} />
            <FlashCards cards={response.data.cards} />
            <Cards course={response.data} />
            <ScrollToTopButton />
        </div>
    )
}

export default CourseDetailsPage