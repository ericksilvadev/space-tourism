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
      <div className={`background ${backgroundImgs[path]}`} />
      <Header />
      <Outlet />
      <GlobalStyle />
    </>
  );
}

export default App;
