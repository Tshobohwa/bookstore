import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <header className="app-header">
    <nav className="nav-bar">
      <h1 className="app-name">Bookstore CMS</h1>
      <ul className="nav-links__list">
        <li className="nav-link__container">
          <NavLink className="nav-link" to="/">
            BOOKS
          </NavLink>
        </li>
        <li className="nav-link__container">
          <NavLink className="nav-link" to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
