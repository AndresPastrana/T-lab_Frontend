import { Link } from 'react-router-dom';

const Landing = () => {
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
