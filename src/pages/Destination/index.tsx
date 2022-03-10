import { DestinationCard } from '../../components/DestinationCard';
import { Container } from './styles';

export const Destination = () => {
  return (
    <Container>
      <h1 className="title">
        <strong>01</strong> Pick your destination
      </h1>
      <DestinationCard />
    </Container>
  );
};
