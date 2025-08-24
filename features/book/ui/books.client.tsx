'use client';

import { useState } from 'react';
import BookSearch from './book.search';
import BookList, { BookItem } from './book.list';
import CreateBookDialog, { NewBook } from './create-book.dialog';

const uid = () =>
(typeof crypto !== 'undefined' && 'randomUUID' in crypto
  ? (crypto as any).randomUUID()
  : Math.random().toString(36).slice(2));

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

const initialBooks: BookItem[] = [
  {
    id: uid(),
    slug: 'dekiru-nihongo',
    title: 'Dekiru Nihongo (Đỏ)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequ...',
    chapters: Array.from({ length: 15 }, (_, i) => i + 1),
    image: '/images/dekiru.jpg',
  },
  {
    id: uid(),
    slug: 'minna-no-nihongo-i',
    title: 'Minna No Nihongo I',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequ...',
    chapters: Array.from({ length: 25 }, (_, i) => i + 1),
    image: '/images/minna.jpg',
  },
];

export default function BooksClient() {
  const [books, setBooks] = useState<BookItem[]>(initialBooks);

  // popup create/edit
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [editing, setEditing] = useState<BookItem | null>(null);

  // mở popup tạo sách (được gọi từ nút "Thêm mới sách" của BookSearch)
  const handleOpenCreate = () => {
    setMode('create');
    setEditing(null);
    setOpen(true);
  };

  // thêm
  const handleCreate = (data: NewBook) => {
    const item: BookItem = {
      id: uid(),
      slug: slugify(data.title),
      title: data.title,
      description: data.description,
      chapters: Array.from({ length: data.totalChapters }, (_, i) => i + 1),
      image: data.image || '/images/default-cover.jpg',
    };
    setBooks(prev => [item, ...prev]);
  };

  // mở popup sửa (được gọi từ BookCard)
  const handleOpenEdit = (b: BookItem) => {
    setMode('edit');
    setEditing(b);
    setOpen(true);
  };

  // cập nhật
  const handleUpdate = (data: NewBook) => {
    if (!editing) return;
    setBooks(prev =>
      prev.map(b =>
        b.id === editing.id
          ? {
            ...b,
            title: data.title,
            description: data.description,
            image: data.image || b.image,
            slug: slugify(data.title),
            chapters: Array.from({ length: data.totalChapters }, (_, i) => i + 1),
          }
          : b
      )
    );
  };

  // xóa
  const handleDelete = (id: string) => {
    const t = books.find(b => b.id === id);
    if (!t) return;
    if (confirm(`Xóa sách: "${t.title}"?`)) {
      setBooks(prev => prev.filter(b => b.id !== id));
    }
  };

  return (
    <div className="pl-4.5">
      <BookSearch
        onSearch={(kw) => console.log('search:', kw)}
        onAddBook={handleOpenCreate}
      />

      <BookList
        items={books}
        onEdit={(id) => {
          const b = books.find(x => x.id === id);
          if (b) handleOpenEdit(b);
        }}
        onDelete={handleDelete}
      />

      <CreateBookDialog
        open={open}
        mode={mode}
        defaultValues={
          editing
            ? {
              title: editing.title,
              description: editing.description,
              totalChapters: editing.chapters.length,
              image: editing.image,
            }
            : undefined
        }
        onClose={() => setOpen(false)}
        onSubmit={(payload) => {
          if (mode === 'create') handleCreate(payload);
          else handleUpdate(payload);
        }}
      />
    </div>
  );
}
