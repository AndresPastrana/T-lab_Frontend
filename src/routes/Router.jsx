import { createBrowserRouter } from 'react-router-dom';
import ProtecetdRoute from '../components/ProtecetdRoute';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Tlab from '../pages/Tlab';

// Pages
// import Auth from '../pages/Auth';
// import Search from '../pages/Search';
// import Tlab from '../pages/Tlab';

// Routes

// Publics Routes
//  /auth
// /search

// Private Routes
// /tlab
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/tlab',
    element: (
      <ProtecetdRoute>
        <Tlab />
      </ProtecetdRoute>
    )
  }
]);

export { router };
