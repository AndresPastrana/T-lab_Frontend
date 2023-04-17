import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// TODO: Define the proTypes
// eslint-disable-next-line react/prop-types
const ProtecetdRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

export default ProtecetdRoute;
