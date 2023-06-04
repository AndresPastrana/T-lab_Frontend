import { createBrowserRouter } from 'react-router-dom';
import ProtecetdRoute from '../components/ProtecetdRoute';
import RedirectIfLogin from '../components/RedirectIfLogin';
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
    element: (
      <RedirectIfLogin redirectPath="/tlab">
        <Landing />
      </RedirectIfLogin>
    )
  },
  {
    path: '/login',
    element: (
      <RedirectIfLogin redirectPath="/tlab">
        <Login />
      </RedirectIfLogin>
    )
  },
  {
    path: '/search',
    element: <Search />,
    children: [
      {
        path: 'student',
        element: <h1>STUDENT</h1>
      },
      {
        path: 'teacher',
        element: <h1>Teacher</h1>
      }
    ]
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
