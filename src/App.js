import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Book from './components/book';
import Contact from './components/contact';
import About from './components/about';
import Auth from './components/auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/auth' element={<Auth/>}></Route>
          <Route path= '/' element={<Home/>}></Route>
          <Route path= '/home' element={<Home/>}></Route>
          <Route path= '/book' element={<Book/>}></Route>
          <Route path= '/contact' element={<Contact/>}></Route>
          <Route path= '/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
