import { Metadata } from "next";
import BookSearch from "@/components/book/book.search";
import BookList from "@/components/book/book.list";

export const metadata: Metadata = {
    title: "Sách",
};

export default function BookPage() {
    return (
        <div className="p-6">
            <BookSearch />
            <BookList />
        </div>
    );
}
