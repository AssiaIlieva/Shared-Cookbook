import { createContext } from 'react';

export const AuthContext = createContext({
  username: '',
  email: '',
  accessToken: '',
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
});
