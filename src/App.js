import React from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvder from './contexts/BookContext';


function App() {
  return (
    <div className="App">
       <ThemeContextProvider >
        <AuthContextProvider>
          <Navbar />
          <BookContextProvder>
            <List />
          </BookContextProvder>
          <ThemeToggle/>
        </AuthContextProvider>
       </ThemeContextProvider >
    </div>
  );
}

export default App;
