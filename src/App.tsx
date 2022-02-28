import { Outlet, useLocation } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import homeBg from './assets/bgs/home.png';
import destinationBg from './assets/bgs/destination.png';
import crewBg from './assets/bgs/crew.png';
import technologyBg from './assets/bgs/tech.png';

function App() {
  const { pathname } = useLocation();
  console.log(location.pathname);

  let backgroundImg = 'home';

  switch (pathname) {
    case '/destination':
      backgroundImg = 'destination';
      break;
    case '/crew':
      backgroundImg = 'crew';
      break;
    case '/technology':
      backgroundImg = 'tech';
      break;
    default:
      backgroundImg = 'home';
  }
  return (
    <>
      <div className={`background ${backgroundImg}`} />
      <Header />
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
