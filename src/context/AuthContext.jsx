import { createContext, useState } from 'react';
const AuthContext = createContext(1);

// TODO:Add PropTypes
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
