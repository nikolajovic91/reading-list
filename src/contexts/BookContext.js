import React, { useState, createContext } from 'react'
import uuid from 'uuid/v1';

export const BookContext = createContext()

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Child 44", author: "Tom Rob Smith", id: 1 },
    { title: "Game of Thrones", author: "George R.R. Martin", id: 2 },
    { title: "Misery", author: "Stephen King", id: 3 }
  ]);
  const [count] = useState(() => books.length)

  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}])
  }

  const removeBook = (id) => {
    return setBooks(books.filter(book => book.id !== id))
  }

  
  return (
    <BookContext.Provider value={{ books, count, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}


