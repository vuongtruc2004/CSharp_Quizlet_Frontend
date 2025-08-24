import Home from "@/features/home/ui/home";
import { sendRequest } from "@/utils/fetch.api";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trang chủ",
};

const HomePage = async () => {
    // const courses: ICourse[] = [
    //     { id: 1, title: "Kanji bài 14", terms: 39, author: "Kuruyami259" },
    //     { id: 2, title: "Part 14.1", terms: 67, author: "Kuruyami259" },
    //     { id: 3, title: "Part 13.2", terms: 22, author: "Kuruyami259" },
    //     { id: 4, title: "Part 14.2", terms: 31, author: "Kuruyami259" },
    //     { id: 5, title: "Kanji bài 9", terms: 55, author: "Kuruyami259" },
    //     { id: 6, title: "Part 13.1", terms: 24, author: "Kuruyami259" },
    // ];

    const courses = await sendRequest<ApiResponse<ICourse[]>>({
        url: '/v1/courses/recent',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    console.log("check course>>>", courses);

    const authors = await sendRequest<ApiResponse<IAuthor[]>>({
        url: '/v1/users',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const books = await sendRequest<ApiResponse<IBook[]>>({
        url: '/v1/books/recent',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });




    return (
        <Home courses={courses.data} books={books.data} authors={authors.data} />
    );
};

export default HomePage;

