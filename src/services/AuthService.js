import axios from 'axios';

export const AuthService = () => {
  const AuthClient = axios.create({
    baseURL: 'http://localhost:3350/',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return AuthClient;
};
