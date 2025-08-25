export type BookResponse = {
  id: string;
  title: string;
  description: string;
  totalChapters: number;
  image?: string;
};

export type BookCreateRequest = Omit<BookResponse, "id">;
export type BookUpdateRequest = Omit<BookResponse, "id">;
