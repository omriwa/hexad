import React, { useState } from 'react';
import { User, Book } from './components/index'
import { bookKeys as BookKeys, IBook, libraryFunction } from './types';

interface IAppState {
  availableBooks: IBook[];
  takenBooks: {
    books: IBook[];
  };
}

function App() {
  const [books, setBooks] = useState<IAppState>({
    availableBooks: [{
      bookTitle: "harry potter",
      id: 0,
      numberOfCopies: 2,
      numberOfOrigin: 1
    },
    {
      bookTitle: "The hobbit",
      id: 1,
      numberOfCopies: 3,
      numberOfOrigin: 4
    }],
    takenBooks: {
      books: [{
        bookTitle: "harry potter",
        id: 0,
        numberOfCopies: 0,
        numberOfOrigin: 0
      },
      {
        bookTitle: "The hobbit",
        id: 1,
        numberOfCopies: 0,
        numberOfOrigin: 0
      }]
    }
  });

  const updateBooks = (bookId: number, key: BookKeys, takeBook: boolean) => {
    const { availableBooks, takenBooks: { books: userBooks } } = books;
    const booksCopy: IAppState = { takenBooks: { books: [...userBooks] }, availableBooks: [...availableBooks] };
    // find available book in the library and replace it
    const availableBookIndex = booksCopy.availableBooks.findIndex(abook => bookId === abook.id);
    takeBook ? booksCopy.availableBooks[availableBookIndex][key]-- : booksCopy.availableBooks[availableBookIndex][key]++;
    // find taken book in the library and replace it
    const takenBookIndex = booksCopy.takenBooks.books.findIndex(tBook => bookId === tBook.id);
    takeBook ? booksCopy.takenBooks.books[takenBookIndex][key]++ : booksCopy.takenBooks.books[takenBookIndex][key]--;

    setBooks(booksCopy);
  }

  const takeOriginalBook: libraryFunction = (book: IBook) => {
    // decrease number of original books
    if (book.numberOfOrigin > 0) {
      updateBooks(book.id, 'numberOfOrigin',true);
    }
  }

  const returnOriginalBook: libraryFunction = (book: IBook) => {
    // decrease number of original books
    if (book.numberOfOrigin > 0) {
      updateBooks(book.id, 'numberOfOrigin',false);
    }
  }

  const takeCopyBook: libraryFunction = (book: IBook) => {
    // decrease number of original books
    if (book.numberOfCopies > 0) {
      updateBooks(book.id, 'numberOfCopies',true);
    }
  }

  const returnCopyBook: libraryFunction = (book: IBook) => {
    // decrease number of original books
    if (book.numberOfCopies > 0) {
      updateBooks(book.id, 'numberOfCopies',false);
    }
  }

  return (
    <>
      <User {...books.takenBooks} returnOriginalBook={returnOriginalBook} returnCopyBook={returnCopyBook}/>
      <h3>Library books</h3>
      <div>
        {
          books.availableBooks.map((book, index) => <Book key={`book-${index}`} {...book} takeOriginalBook={() => takeOriginalBook(book)} takeCopyBook={() => takeCopyBook(book)}/>)
        }
      </div>
    </>
  );
}

export default App;
