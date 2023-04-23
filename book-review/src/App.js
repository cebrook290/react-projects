import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import BookLayout from './components/BookLayout';
import About from './pages/About';


function App() {
  return (
  <>
  <Navbar />
  
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/books"element={<BookLayout />}>
      <Route index element={<BookList />} />
      <Route path=':id' element={<Book />} />
      <Route path='/books/new' element={<NewBook />}/>
      </Route>
    {/* <Route path='/books' element={<BookList />}/>
    <Route path='/books/:id' element={<Book />}/>
    <Route path='/books/new' element={<NewBook />}/> */}
    <Route path='/About' element={<About />}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </>
  )
}

export default App;
