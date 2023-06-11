import { createBrowserRouter } from 'react-router-dom';
import ProtecetdRoute from '../components/ProtecetdRoute';
import RedirectIfLogin from '../components/RedirectIfLogin';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Tlab from '../pages/Tlab';
import SideBar from '../shared/SideBar';
import PeopleList from '../components/Tlab/dashboard/people/PeopleList';
import Courts from '../components/Tlab/dashboard/court/Courts';

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
    element: <Search />
  },
  {
    path: '/tlab',
    element: (
      <ProtecetdRoute>
        <Tlab />
      </ProtecetdRoute>
    )
  },
  {
    path: '/dash',
    element: <SideBar />,
    children: [
      {
        path: 'people',
        element: <PeopleList />
      },
      {
        path: 'people:id',
        element: <h1>Student info</h1>
      },
      {
        path: 'courts',
        element: <Courts />,
        children: [
          {
            path: ':id',
            element: <h2>Edit Court</h2>
          }
        ]
      }
    ]
  }
]);

export { router };
