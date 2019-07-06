import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const submitForm = e => {
    e.preventDefault();
    if (title === "" || author === "") return;
    addBook(title, author)
    setTitle('');
    setAuthor('')
  }


  return (
    <form onSubmit={submitForm}>
      <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="Enter title..." />
      <input type="text" onChange={e => setAuthor(e.target.value)} value={author} placeholder="Enter author..." />
      <input type="submit" value="Add book" />
    </form>
  )
}

export default BookForm
