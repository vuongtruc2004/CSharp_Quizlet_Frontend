import { Metadata } from "next";
import BooksClient from "@/features/book/ui/books.client";
import { sendRequest } from "@/utils/fetch.api";

export const metadata: Metadata = { title: "Sách" };

export default async function BookPage() {
    const bookResponse = await sendRequest<ApiResponse<BookResponse[]>>({
        url: `/v1/books`,
    });
    return <BooksClient bookList={bookResponse.data} />;
}
