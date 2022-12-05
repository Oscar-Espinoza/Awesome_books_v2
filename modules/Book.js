/* eslint-disable max-classes-per-file, class-methods-use-this, import/prefer-default-export */
export class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  remove(thisBook) {
    let booksArr = JSON.parse(localStorage.getItem('books'));
    const booksList = document.getElementById('books-list');
    const bookIndex = Array.from(booksList.children).indexOf(thisBook);
    booksArr = booksArr.filter((book) => book.id !== this.id);
    localStorage.setItem('books', JSON.stringify(booksArr));
    booksList.removeChild(thisBook);
    if (bookIndex !== 0 && bookIndex < booksArr.length) {
      for (let i = bookIndex; i < booksArr.length; i += 1) {
        if (i % 2 === 0) {
          booksList.children[i].className = 'book pair-bg';
        } else {
          booksList.children[i].className = 'book odd-bg';
        }
      }
    }
  }

  addBookStorage() {
    const booksArr = JSON.parse(localStorage.getItem('books'));
    booksArr.push({
      id: this.id,
      title: this.title,
      author: this.author,
    });
    localStorage.setItem('books', JSON.stringify(booksArr));
    localStorage.setItem('lastId', this.id);
  }

  addBookToDom() {
    const booksList = document.getElementById('books-list');
    const newBook = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerText = 'remove';
    newBook.classList.add('book');
    newBook.setAttribute('id', this.id);
    newBook.innerHTML = `
    <p class="book-author">"${this.title}" by ${this.author}</p>
    `;
    removeBtn.addEventListener('click', () => this.remove(newBook));
    newBook.appendChild(removeBtn);
    booksList.appendChild(newBook);
    if (Array.from(booksList.children).indexOf(newBook) % 2 === 0) {
      newBook.classList.add('pair-bg');
    } else {
      newBook.classList.add('odd-bg');
    }
  }
}