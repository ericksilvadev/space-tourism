import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container } from './styles';

export const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const { pathname } = useLocation();
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <button
        type="button"
        onClick={() => setDisplayMenu(!displayMenu)}
        className="nav-btn"
      >
        <div className={displayMenu ? 'burger-menu active' : 'burger-menu'} />
      </button>
      <nav className={displayMenu ? 'display' : ''}>
        <ul>
          <Link className={pathname === '/' ? 'selected' : ''} to="/">
            <li>
              <strong>00</strong> Home
            </li>
          </Link>
          <Link
            className={pathname.includes('destination') ? 'selected' : ''}
            to="/destination/moon"
          >
            <li>
              <strong>01</strong> Destination
            </li>
          </Link>
          <Link className={pathname.includes('crew') ? 'selected' : ''} to="/crew">
            <li>
              <strong>02</strong> Crew
            </li>
          </Link>
          <Link className={pathname.includes('tech') ? 'selected' : ''} to="/technology">
            <li>
              <strong>03</strong> Technology
            </li>
          </Link>
        </ul>
      </nav>
    </Container>
  );
};
