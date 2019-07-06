import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';

const BookList = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="books">
      {books.map(book => {
        return <BookDetail key={book.id} book={book} />
      })}
    </div>
  )
}

export default BookList
