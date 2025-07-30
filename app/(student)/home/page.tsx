import Home from "@/features/home/ui/home";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trang chủ",
};


const HomePage = () => {
    const items: ICourse[] = [
        { id: 1, title: "Kanji bài 14", terms: 39, author: "Kuruyami259" },
        { id: 2, title: "Part 14.1", terms: 67, author: "Kuruyami259" },
        { id: 3, title: "Part 13.2", terms: 22, author: "Kuruyami259" },
        { id: 4, title: "Part 14.2", terms: 31, author: "Kuruyami259" },
        { id: 5, title: "Kanji bài 9", terms: 55, author: "Kuruyami259" },
        { id: 6, title: "Part 13.1", terms: 24, author: "Kuruyami259" },
    ];

    const books: IBook[] = [
        { id: 1, title: "English Grammar in Use", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/98/61/98611d09fe15baa43b2236fa87517b30.jpg" },
        { id: 2, title: "できる日本語", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/2d/a1/2da1356062389790de83708667f74950.jpg" },
        { id: 3, title: "English Grammar in Use", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/76/44/7644dbd818f90aa275c11071b74fe91e.jpid: 1, g" },
        { id: 4, title: "English Grammar in Use", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/7c/1b/7c1b7afee3495bd9515910c615140152.jpg" },
        { id: 5, title: "English Grammar in Use", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/98/61/98611d09fe15baa43b2236fa87517b30.jpg" },
        { id: 6, title: "できる日本語", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/2d/a1/2da1356062389790de83708667f74950.jpg" },
        { id: 7, title: "English Grammar in Use", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/76/44/7644dbd818f90aa275c11071b74fe91e.jpid: 1, g" },
        { id: 8, title: "English Grammar in Use", author: "Kuruyami259", edition: 1, image: "https://assets.quizlet.com/explanations/textbook_covers/cache/7c/1b/7c1b7afee3495bd9515910c615140152.jpg" }
    ]

    const authors: IAuthor[] = [
        { id: 1, name: "Nguyễn Văn A", course: 3, avatar: "https://lh3.googleusercontent.com/a/ACg8ocJn5hF0_JCqNJvCF8_vM2pwzW3lDzUWu046L3ZKeN9sAWdd7w=s96-c?sz=150" },
        { id: 2, name: "Trần Thị B", course: 2, avatar: "https://lh3.googleusercontent.com/a/ACg8ocJn5hF0_JCqNJvCF8_vM2pwzW3lDzUWu046L3ZKeN9sAWdd7w=s96-c?sz=150" },
        { id: 3, name: "Lê Văn C", course: 5, avatar: "https://lh3.googleusercontent.com/a/ACg8ocJn5hF0_JCqNJvCF8_vM2pwzW3lDzUWu046L3ZKeN9sAWdd7w=s96-c?sz=150" },
        { id: 4, name: "Phạm Thị D", course: 1, avatar: "https://lh3.googleusercontent.com/a/ACg8ocJn5hF0_JCqNJvCF8_vM2pwzW3lDzUWu046L3ZKeN9sAWdd7w=s96-c?sz=150" },
        { id: 5, name: "Hoàng Văn E", course: 4, avatar: "https://lh3.googleusercontent.com/a/ACg8ocJn5hF0_JCqNJvCF8_vM2pwzW3lDzUWu046L3ZKeN9sAWdd7w=s96-c?sz=150" },
        { id: 6, name: "Đặng Thị F", course: 2, avatar: "https://lh3.googleusercontent.com/a/ACg8ocJn5hF0_JCqNJvCF8_vM2pwzW3lDzUWu046L3ZKeN9sAWdd7w=s96-c?sz=150" },
        { id: 7, name: "Võ Văn G", course: 3, avatar: "https://lh3.googleusercontent.com/a/ACg8ocJn5hF0_JCqNJvCF8_vM2pwzW3lDzUWu046L3ZKeN9sAWdd7w=s96-c?sz=150" },
        { id: 8, name: "Bùi Thị H", course: 6, avatar: "https://lh3.googleusercontent.com/a/ACg8ocJn5hF0_JCqNJvCF8_vM2pwzW3lDzUWu046L3ZKeN9sAWdd7w=s96-c?sz=150" },
    ];


    return (
        <Home items={items} books={books} authors={authors} />
    );
};

export default HomePage;
