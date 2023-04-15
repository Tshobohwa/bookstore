import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Categories from './Categories';
import Books from './Books';

const App = () => (
  <>
    <Header />
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </>
);

export default App;
