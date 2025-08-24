'use client';

import { useMemo, useState } from "react";
import BookSearch from "./book.search";
import BookList, { BookItem } from "./book.list";
import CreateBookDialog, { NewBook } from "./create-book.dialog";

const uid = () =>
(typeof crypto !== 'undefined' && 'randomUUID' in crypto
  ? (crypto as any).randomUUID()
  : Math.random().toString(36).slice(2));

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

const normalize = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

const initialBooks: BookItem[] = [
  {
    id: uid(),
    slug: "dekiru-nihongo",
    title: "Dekiru Nihongo (Đỏ)",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequ...",
    chapters: Array.from({ length: 15 }, (_, i) => i + 1),
    image: "/images/dekiru.jpg",
  },
  {
    id: uid(),
    slug: "minna-no-nihongo-i",
    title: "Minna No Nihongo I",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequ...",
    chapters: Array.from({ length: 25 }, (_, i) => i + 1),
    image: "/images/minna.jpg",
  },
];

export default function BooksClient() {
  const [books, setBooks] = useState<BookItem[]>(initialBooks);
  const [query, setQuery] = useState("");

  // popup create/edit
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [editingId, setEditingId] = useState<string | null>(null);

  const editing = useMemo(
    () => books.find(b => b.id === editingId) || null,
    [books, editingId]
  );

  // SEARCH (realtime + Enter/icon)
  const filtered = useMemo(() => {
    if (!query.trim()) return books;
    const q = normalize(query.trim());
    return books.filter(b =>
      normalize(b.title).includes(q) || normalize(b.description).includes(q)
    );
  }, [books, query]);

  // CREATE
  const openCreate = () => { setMode('create'); setEditingId(null); setOpen(true); };
  const handleCreate = (data: NewBook) => {
    const item: BookItem = {
      id: uid(),
      slug: slugify(data.title),
      title: data.title,
      description: data.description,
      chapters: Array.from({ length: data.totalChapters }, (_, i) => i + 1),
      image: data.image || "/images/default-cover.jpg",
    };
    setBooks(prev => [item, ...prev]);
  };

  // EDIT
  const openEdit = (id: string) => { setMode('edit'); setEditingId(id); setOpen(true); };
  const handleUpdate = (data: NewBook) => {
    setBooks(prev => prev.map(b => {
      if (b.id !== editingId) return b;
      return {
        ...b,
        title: data.title,
        description: data.description,
        image: data.image || b.image,
        slug: slugify(data.title),
        chapters: Array.from({ length: data.totalChapters }, (_, i) => i + 1),
      };
    }));
  };

  // DELETE
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
        onSearch={setQuery}            // Enter / click icon
        onChangeSearch={setQuery}      // realtime
        onAddBook={openCreate}
      />

      <BookList
        items={filtered}
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      <CreateBookDialog
        open={open}
        mode={mode}
        defaultValues={
          editing ? {
            title: editing.title,
            description: editing.description,
            totalChapters: editing.chapters.length,
            image: editing.image,
          } : undefined
        }
        onClose={() => setOpen(false)}
        onSubmit={(payload) => mode === 'create' ? handleCreate(payload) : handleUpdate(payload)}
      />
    </div>
  );
}
