import React from 'react';
import BookCard from './book.card';

const books = [
  {
    title: 'Dekiru Nihongo (Đỏ)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequ...',
    chapters: Array.from({ length: 15 }, (_, i) => i + 1),
    image: '/images/dekiru.jpg',
  },
  {
    title: 'Minna No Nihongo I',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequ...',
    chapters: Array.from({ length: 25 }, (_, i) => i + 1),
    image: '/images/minna.jpg',
  },
];

const BookList = () => {
  return (
    <div className="flex flex-col gap-6 mt-6">
      {books.map((book) => (
        <BookCard key={book.title} {...book} />
      ))}
    </div>
  );
};

export default BookList;
