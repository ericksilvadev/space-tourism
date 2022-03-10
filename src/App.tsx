import { Outlet, useLocation } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';

type IBgImages = {
  [key: string]: string;
};

function App() {
  const { pathname } = useLocation();

  const backgroundImgs: IBgImages = {
    home: 'home',
    destination: 'destination',
    crew: 'crew',
    technology: 'tech',
  };

  const path = pathname.split('/')[1] || 'home';

  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyle />
      <div className={`background ${backgroundImgs[path]}`} />
    </>
  );
}

export default App;
