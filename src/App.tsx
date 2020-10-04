import React,{useState} from 'react';
import {User,Book} from './components/index'
import { IUserProps } from './components/user/User';
import { IBook } from './types';

function App() {
  const [books, setBooks] = useState<IBook[]>([{
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
    }])
  const [userBook, setUserBook] = useState<IUserProps>({books:[]})
  
  return (
    <>
      <User {...userBook} />
      <h3>Library books</h3>
      <div>
      {
        books.map((book, index) => <Book key={`book-${index}`} {...book}/>)
      }
      </div>
      </>
  );
}

export default App;
