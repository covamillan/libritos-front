import { Book } from './book';

export type Donor = {
  id: string;
  name: string;
  email: string;
  adress: string;
  password: string;
  token: string;
  books: Book[];
};
