import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Tlab = () => {
  // TODO: consume all the user info
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Tlab</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default Tlab;
