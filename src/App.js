import React from 'react';
import BookList from './components/BookList';
import { BookContextProvider } from './contexts/BookContext';
import Nav from './components/Nav';
import BookCount from './components/BookCount';
import BookForm from './components/BookForm';

function App() {
  return (
    <div>
        <BookContextProvider>
          <Nav />
          <BookCount />
          <BookList />
          <BookForm />
        </BookContextProvider>
    </div>
  );
}

export default App;
