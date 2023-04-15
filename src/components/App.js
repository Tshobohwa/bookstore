import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Header from './Header';
import Categories from './Categories';
import Books from './Books';
import store from '../redux/store';

const App = () => (
  <>
    <Provider store={store}>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  </>
);

export default App;
