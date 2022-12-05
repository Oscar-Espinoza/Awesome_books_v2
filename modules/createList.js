
import { Book } from './Book.js'
export const createList = (booksArr) => {
  const initialBooks = [
    new Book(1, 'book1', 'author1'),
    new Book(2, 'book2', 'author2'),
  ];

  if (booksArr === null || booksArr.length === 0) {
    booksArr = initialBooks;
    localStorage.setItem('books', JSON.stringify(booksArr));
  }
  localStorage.setItem('lastId', booksArr[booksArr.length - 1].id)
  booksArr.forEach((book) => {
    book = new Book(book.id, book.title, book.author);
    book.addBookToDom();
  });
};