import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container } from './style';

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <img src={logo} alt="Logo" />

      <nav>
        <ul>
          <Link className={pathname === '/' ? 'selected' : ''} to="/">
            <li>
              <strong>00</strong> Home
            </li>
          </Link>
          <Link
            className={pathname === 'destination' ? 'selected' : ''}
            to="/destination"
          >
            <li>
              <strong>01</strong> Destination
            </li>
          </Link>
          <Link className={pathname === 'crew' ? 'selected' : ''} to="/crew">
            <li>
              <strong>02</strong> Crew
            </li>
          </Link>
          <Link className={pathname === 'technology' ? 'selected' : ''} to="/technology">
            <li>
              <strong>03</strong> Technology
            </li>
          </Link>
        </ul>
      </nav>
    </Container>
  );
};
