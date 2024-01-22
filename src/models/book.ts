import { Donor } from './donor';

export type Book = {
  isbn: string;
  title: string;
  description: string;
  author: string;
  cover: string;
  genre:
    | 'adventure'
    | 'drama'
    | 'fantasy'
    | 'horror'
    | 'mystery'
    | 'romance'
    | 'comedy'
    | 'science fiction'
    | 'tragedy'
    | 'comic'
    | 'biography'
    | 'children'
    | 'history'
    | 'poetry'
    | 'other';
  properties: Properties;
};

type Properties = {
  owner: Donor;
  state: 'mint' | 'near mint' | 'very good' | 'good' | 'poor';
};
