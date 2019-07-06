import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';


const BookDetail = ({ book }) => {
  const { id, title, author } = book;
  const { removeBook } = useContext(BookContext)
  return (
    <div className="book" onClick={() => removeBook(id)}>
      <p>{title}</p>
      <p>{author}</p>
    </div>
  )
}

export default BookDetail
