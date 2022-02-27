import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
