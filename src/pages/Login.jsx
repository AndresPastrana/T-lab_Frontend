import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './login.css';
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [formValues, onChange] = useForm({
    email: 'ae@gmail.com',
    password: 'Andres.1215'
  });
  const { email, password } = formValues;
  const login = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const resp = await fetch('http://localhost:3350/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formValues)
        });
        const data = await resp.json();
        const { access_token, refresh_token } = data;
        setUser((prev) => {
          return { ...prev, user: { access_token, refresh_token } };
        });
        // We save the token in localstorage
        localStorage.setItem('tokens', JSON.stringify({ access_token, refresh_token }));
        navigate('/tlab');
      } catch (error) {
        console.log(error);
      }
    }
  };
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
