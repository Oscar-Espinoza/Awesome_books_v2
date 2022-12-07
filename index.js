/* eslint-disable max-classes-per-file, class-methods-use-this */
import { injectCurrentDate } from './modules/currentDate.js';
import { Book } from './modules/Book.js';
import { createList } from './modules/createList.js';

const booksArr = JSON.parse(localStorage.getItem('books'));

injectCurrentDate('UTC-6');

document.getElementById('add-book-btn').addEventListener('click', () => {
  let lastId = localStorage.getItem('lastId');
  if (lastId === null) {
    lastId = booksArr[booksArr.length - 1].id;
  } else {
    lastId = parseInt(lastId, 10);
  }
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = lastId + 1;
  const newBook = new Book(id, title, author);
  newBook.addBookToDom();
  newBook.addBookStorage(booksArr);
});

document.querySelectorAll('.nav-link').forEach((navLink) => {
  navLink.addEventListener('click', () => {
    if (!navLink.classList.contains('active')) {
      document.querySelectorAll('.active').forEach((element) => {
        element.classList.remove('active');
      });
      const elementId = navLink.innerHTML.toLowerCase();
      const element = document.getElementById(elementId);
      element.classList.add('active');
      navLink.classList.add('active');
    }
  });
});

createList(booksArr);