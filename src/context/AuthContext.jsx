import { createContext, useState } from 'react';
const AuthContext = createContext(1);

// TODO:Add PropTypes
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // We check if the user is in the Local storage else null
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
