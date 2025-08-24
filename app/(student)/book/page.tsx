import { Metadata } from "next";
import BookSearch from "@/features/book/ui/book.search";
import BookList from "@/features/book/ui/book.list";

export const metadata: Metadata = {
    title: "Sách",
};

export default function BookPage() {
    return (
        <div className="pl-4.5">
            <BookSearch />
            <BookList />
        </div>
    );
}
