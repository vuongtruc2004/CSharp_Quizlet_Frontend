'use client';
import BookCard from './book.card';

export type BookItem = {
    id: string;
    slug: string;
    title: string;
    description: string;
    chapters: number[];
    image: string;
};

type Props = {
    items: BookItem[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
};

const BookList = ({ items, onEdit, onDelete }: Props) => {
    return (
        <div className="flex flex-col gap-6 mt-6">
            {items.map((book) => (
                <BookCard
                    key={book.id}
                    {...book}
                    onEdit={() => onEdit(book.id)}
                    onDelete={() => onDelete(book.id)}
                />
            ))}
        </div>
    );
};

export default BookList;
