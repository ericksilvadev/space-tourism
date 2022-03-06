import { useParams } from 'react-router-dom';

import { Container } from './styles';
import moonImg from '../../assets/moon.svg';
import marsImg from '../../assets/mars.svg';
import europaImg from '../../assets/europa.svg';
import titanImg from '../../assets/titan.svg';
import { destinations } from '../../data/destinations';

type IDestinationImages = {
  [key: string]: string;
};

export const DestinationCard = () => {
  const destinationsImg: IDestinationImages = {
    moon: moonImg,
    mars: marsImg,
    europa: europaImg,
    titan: titanImg,
  };

  const { id } = useParams();

  const destination = destinations.find((dest) => dest.name === id);

  return (
    <Container>
      <img src={destinationsImg[id!]} alt={id} />
      <section className="infos">
        <h1>{destination?.name}</h1>
        <p>{destination?.description}</p>

        <div className="travel-info">
          <div>
            <span>Avg. Distance</span>
            <span>{destination?.distance}</span>
          </div>
          <div>
            <span>Est. Travel Time</span>
            <span>{destination?.travelTime}</span>
          </div>
        </div>
      </section>
    </Container>
  );
};
