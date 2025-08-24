import { Metadata } from 'next';
import BooksClient from '@/features/book/ui/books.client';

export const metadata: Metadata = {
    title: 'Sách',
};

export default function BookPage() {
    return <BooksClient />;
}
