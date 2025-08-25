'use client';

import { useEffect, useMemo, useState } from "react";
import BookSearch from "./book.search";
import BookList, { BookItem } from "./book.list";
import BookCreate from "./book.create";
import BookUpdate from "./book.update";
import BookDetail from "./book.detail";

const uid = () =>
(typeof crypto !== "undefined" && "randomUUID" in crypto
    ? (crypto as any).randomUUID()
    : Math.random().toString(36).slice(2));

const normalize = (s: string) =>
    s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

const initial: BookItem[] = [
    // {
    //     id: uid(),
    //     title: "Dekiru Nihongo (Đỏ)",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur vitae culpa earum qui iure laboriosam ea facere, odit pariatur!",
    //     chapters: Array.from({ length: 15 }, (_, i) => i + 1),
    //     image: "https://www.tieng-nhat.com/wp-content/uploads/2022/10/dekiri-nihongo-so-cap.jpg",
    // },
    // {
    //     id: uid(),
    //     title: "Minna No Nihongo I",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur vitae culpa earum qui iure laboriosam ea facere, odit pariatur!",
    //     chapters: Array.from({ length: 25 }, (_, i) => i + 1),
    //     image: "https://s2.studylib.net/store/data/026088106_1-12b76a2a71bc84f53909fcf8ae97dbca-768x994.png",
    // },
];

export default function BooksClient({ bookList }: { bookList: BookResponse[] }) {
    const [books, setBooks] = useState<BookItem[]>(initial);
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        if (!q.trim()) return books;
        const nq = normalize(q.trim());
        return books.filter(
            (b) => normalize(b.title).includes(nq) || normalize(b.description).includes(nq)
        );
    }, [books, q]);
    const toBookItem = (b: BookResponse): BookItem => ({
        id: b.id ?? uid(),
        title: b.japaneseTitle,
        description: b.description ?? "", // fix: luôn là string
        chapters: [1, 2, 3],
        image: "/images/default-cover.jpg",
    });

    // detail / edit states
    const [detailOpen, setDetailOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const [current, setCurrent] = useState<BookItem | null>(null);

    // crud handlers
    const createBook = (payload: { title: string; description: string; totalChapters: number; image?: string; }) => {
        const item: BookItem = {
            id: uid(),
            title: payload.title,
            description: payload.description,
            chapters: Array.from({ length: payload.totalChapters }, (_, i) => i + 1),
            image: payload.image || "/images/default-cover.jpg",
        };
        setBooks((prev) => [item, ...prev]);
    };

    const updateBook = (payload: { title: string; description: string; totalChapters: number; image?: string; }) => {
        if (!current) return;
        setBooks((prev) =>
            prev.map((b) =>
                b.id === current.id
                    ? {
                        ...b,
                        title: payload.title,
                        description: payload.description,
                        image: payload.image || b.image,
                        chapters: Array.from({ length: payload.totalChapters }, (_, i) => i + 1),
                    }
                    : b
            )
        );
    };

    const deleteBook = (b: BookItem) => setBooks((prev) => prev.filter((x) => x.id !== b.id));
    useEffect(() => {
        if (!bookList?.length) return;

        const mapped: BookItem[] = bookList.map((b: BookResponse) => ({
            id: b.id ?? uid(),
            title: b.japaneseTitle,
            description: b.description ?? "", // always string
            chapters: [1, 2, 3], // number[]
            image: b.thumbnail ?? "/images/default-cover.jpg",
        }));

        setBooks(mapped);
    }, [bookList]);

    return (
        <div className="pl-4.5">
            <BookSearch onChangeSearch={setQ} onAddBook={() => setCreateOpen(true)} />

            <BookList
                items={filtered}
                onDetail={(b) => {
                    setCurrent(b);
                    setDetailOpen(true);
                }}
                onEdit={(b) => {
                    setCurrent(b);
                    setUpdateOpen(true);
                }}
                onDelete={deleteBook}
            />

            {/* <BookCreate openCreate={createOpen} setOpenCreate={setCreateOpen} onSubmit={createBook} /> */}

            <BookUpdate
                open={updateOpen}
                setOpen={setUpdateOpen}
                book={
                    current
                        ? {
                            id: current.id,
                            title: current.title,
                            description: current.description,
                            totalChapters: current.chapters.length,
                            image: current.image,
                        }
                        : undefined
                }
                onSubmit={(p) => updateBook(p)}
            />

            <BookDetail
                openDetail={detailOpen}
                setOpenDetail={setDetailOpen}
                book={
                    current
                        ? {
                            title: current.title,
                            description: current.description,
                            totalChapters: current.chapters.length,
                            image: current.image,
                        }
                        : undefined
                }
            />
        </div>
    );
}
