import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Landing = () => {
  // TODO: if user Navigate to /tlab
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to="/tlab" replace={true} />;
  }
  return (
    <div>
      <h1>T lab Research</h1>
      <div>
        <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};

export default Landing;
