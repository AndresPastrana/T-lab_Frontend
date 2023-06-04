import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// eslint-disable-next-line react/prop-types
const RedirectIfLogin = ({ redirectPath, children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to={redirectPath} />;
  }
  return children;
};

export default RedirectIfLogin;
