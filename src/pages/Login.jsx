import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { AuthService } from '../services/AuthService';
import { decodeToken } from '../helpers/decodeToken';
import './login.css';
const Login = () => {
  const { setUser, user } = useContext(AuthContext);

  const [formValues, onChange] = useForm({
    email: 'ae@gmail.com',
    password: 'Andres.1215'
  });
  const { email, password } = formValues;
  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert('Empty flieds');
    }
    try {
      const { data } = await AuthService().post('auth/login', formValues);
      const userData = decodeToken(data.access_token);
      const user = { ...data, ...userData };
      localStorage.setItem('user', JSON.stringify(user));
      // Update the AuthContext
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  //  If the user is alredy login Navigate to /tlab
  if (user) {
    return <Navigate to="/tlab" replace={true} />;
  }
  return (
    <div className="container">
      <form onSubmit={login}>
        <div className="titule_container">
          <h1>Hey, hello 👋 </h1>
          <p>Lorem ipsum dolor sit </p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="w-100 br-5"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            id="password"
            className="w-100 br-5"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button className="br-5 w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
