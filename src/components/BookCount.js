import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';

const BookCount = () => {
  const {books} = useContext(BookContext)
  return (
    <div>
      {books.length ? <h3>You have {books.length} books to read</h3> : <h3>Add books to your reading list.</h3>}
    </div>
  )
}

export default BookCount
