// app/home/page.tsx (Next.js 13+)
import HomePageComponent from "@/components/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trang chủ",
};


const HomePage = () => {
    const items = [
        { title: "Kanji bài 14", terms: 39, author: "Kuruyami259" },
        { title: "Part 14.1", terms: 67, author: "Kuruyami259" },
        { title: "Part 13.2", terms: 22, author: "Kuruyami259" },
        { title: "Part 14.2", terms: 31, author: "Kuruyami259" },
        { title: "Kanji bài 9", terms: 55, author: "Kuruyami259" },
        { title: "Part 13.1", terms: 24, author: "Kuruyami259" },
    ];

    const books = [
        { title: "English Grammar in Use", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/98/61/98611d09fe15baa43b2236fa87517b30.jpg" },
        { title: "できる日本語", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/2d/a1/2da1356062389790de83708667f74950.jpg" },
        { title: "English Grammar in Use", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/76/44/7644dbd818f90aa275c11071b74fe91e.jpg" },
        { title: "English Grammar in Use", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/7c/1b/7c1b7afee3495bd9515910c615140152.jpg" }

    ]


    return (
        <>
            <HomePageComponent items={items} books={books} />
        </>
    );
};

export default HomePage;
