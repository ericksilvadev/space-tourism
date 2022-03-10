import { Link, useLocation, useParams } from 'react-router-dom';

import { Container } from './styles';
import moonImg from '/assets/moon.svg';
import marsImg from '/assets/mars.svg';
import europaImg from '/assets/europa.svg';
import titanImg from '/assets/titan.svg';
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

  const { pathname } = useLocation();

  const { id } = useParams();

  const destination = destinations.find((dest) => dest.name === id);

  return (
    <Container>
      <img src={destinationsImg[id!]} alt={id} />

      <section className="infos">
        <nav>
          <Link
            className={pathname.includes('moon') ? 'selected' : ''}
            to="/destination/moon"
          >
            Moon
          </Link>
          <Link
            className={pathname.includes('mars') ? 'selected' : ''}
            to="/destination/mars"
          >
            Mars
          </Link>
          <Link
            className={pathname.includes('europa') ? 'selected' : ''}
            to="/destination/europa"
          >
            Europa
          </Link>
          <Link
            className={pathname.includes('titan') ? 'selected' : ''}
            to="/destination/titan"
          >
            Titan
          </Link>
        </nav>
        <h1>{destination?.name}</h1>
        <p>{destination?.description}</p>

        <div className="travel-info">
          <div>
            <h5>Avg. Distance</h5>
            <span>{destination?.distance}</span>
          </div>
          <div>
            <h5>Est. Travel Time</h5>
            <span>{destination?.travelTime}</span>
          </div>
        </div>
      </section>
    </Container>
  );
};
