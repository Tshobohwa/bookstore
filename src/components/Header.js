import { NavLink } from 'react-router-dom';
import profile from '../assets/avatar.png';

import './Header.css';

const Header = () => (
  <header className="app-header">
    <nav className="nav-bar">
      <ul className="nav-links__list">
        <li className="nav-link__container">
          <h1 className="app-name">Bookstore CMS</h1>
        </li>
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
      <div className="oval">
        <img src={profile} className="profile-icon" alt="profile" />
      </div>
    </nav>
  </header>
);

export default Header;
