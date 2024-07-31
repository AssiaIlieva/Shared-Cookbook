import { createContext, useContext } from 'react';
import usePersistedState from '../hooks/usePersistedState';

export const AuthContext = createContext({
  userId: '',
  username: '',
  email: '',
  accessToken: '',
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
});

export function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState('auth', {});
  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);

    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    username: authState.username,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return <AuthContext.Provider value={contextData}>{props.children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const authData = useContext(AuthContext);
  return authData;
}