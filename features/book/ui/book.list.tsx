'use client';
import BookCard from './book.card';

export type BookItem = {
    id: string;
    title: string;
    description: string;
    chapters: number[];
    image: string;
};

export default function BookList({
    items, onDetail, onEdit, onDelete,
}: {
    items: BookItem[];
    onDetail: (b: BookItem) => void;
    onEdit: (b: BookItem) => void;
    onDelete: (b: BookItem) => void;
}) {
    return (
        <div className="flex flex-col gap-6 mt-6">
            {items.map((b) => (
                <BookCard
                    key={b.id}
                    {...b}
                    onDetail={() => onDetail(b)}
                    onEdit={() => onEdit(b)}
                    onDelete={() => onDelete(b)}
                />
            ))}
        </div>
    );
}
