import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { Crew } from '../pages/Crew';
import { Destination } from '../pages/Destination';
import { Home } from '../pages/Home';
import { Technology } from '../pages/Technology';

export const Router = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="destination/:id" element={<Destination />} />
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Route>
    {/* <Route path="/destination" element={<Destination />} /> */}
  </Routes>
);
