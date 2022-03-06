import { Link } from 'react-router-dom';
import { DestinationCard } from '../../components/DestinationCard';
import { Container } from './styles';

export const Destination = () => {
  return (
    <Container>
      <h5>
        <span>01</span> Pick your destination
      </h5>
      <nav>
        <Link to="/destination/moon">Moon</Link>
        <Link to="/destination/mars">Mars</Link>
        <Link to="/destination/europa">Europa</Link>
        <Link to="/destination/titan">Titan</Link>
      </nav>
      <DestinationCard />
    </Container>
  );
};
