import { Navigate } from 'react-router-dom';
// TODO: Define the proTypes
// eslint-disable-next-line react/prop-types
const ProtecetdRoute = ({ role = '', children }) => {
  // We extract the token from local storage
  const { access_token, refresh_token } = JSON.parse(localStorage.getItem('tokens')) || {
    access_token: null,
    refresh_token: null
  };
  //   TODO: Check the role in the accesst token
  if (access_token && refresh_token) {
    return <>{children}</>;
  }
  return <Navigate to="/login" replace />;
};

export default ProtecetdRoute;
