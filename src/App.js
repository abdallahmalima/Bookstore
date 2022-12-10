import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookPage from './Pages/BookPage';
import CategoryPage from './Pages/CategoryPage';

const App = () => (
  <div className="App">
     <NavBar/>
     <Routes>
       <Route path="/" element={<BookPage/>}/>
       <Route path="/books" element={<BookPage/>}/>
       <Route path="/categories" element={<CategoryPage/>}/>
     </Routes>
  </div>
);

export default App;
