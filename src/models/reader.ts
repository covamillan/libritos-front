import { Book } from './book';

export type Reader = {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  favoriteBooks: Book[];
};
