import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { AuthService } from '../services/AuthService';
import { decodeToken } from '../helpers/decodeToken';
import { useState } from 'react';
const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

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
      if (!loading) {
        setLoading(true);
      }

      const { data } = await AuthService().post('auth/login', formValues);
      const userData = decodeToken(data.access_token);
      if (data?.access_token) {
        const user = { ...data, ...userData };
        localStorage.setItem('user', JSON.stringify(user));
        // Update the AuthContext
        setUser(user);
      }
    } catch (error) {
      setLoading(false);
      alert('Error while loging');
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" onSubmit={login}>
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="
                block w-full rounded-md border-0
                py-1.5 px-2 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 
                focus:ring-2 focus:ring-green-300
                sm:text-sm sm:leading-6"
                onChange={onChange}
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              {/* Forgot password link */}
              {/* <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="**********"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400    focus:ring-2 focus:ring-inset focus:ring-green-300 sm:text-sm sm:leading-6"
                onChange={onChange}
              />
            </div>
          </div>
          {/* Sign in  */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {!loading ? 'Sign in' : 'loading...'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Just looking for a doc ?{'  '}
          <Link
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
            to="/search">
            Go to Search
          </Link>
          {/* <a href="#" className="font-semibold leading-6 text-green-600 hover:text-green-500">
            Go to Search
          </a> */}
        </p>
      </div>
    </div>
  );
};

export default Login;
