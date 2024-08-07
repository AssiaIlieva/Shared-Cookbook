import { useNavigate } from 'react-router-dom';
import { login, logout, register } from '../api/auth-api';
import { useAuthContext } from '../contexts/AuthContext';

export const useLogin = () => {
  const { changeAuthState } = useAuthContext();

  const loginHandler = async (email, password) => {
    const result = await login(email, password);
    const { password: _, ...authData } = result;
    changeAuthState(authData);
    return result;
  };
  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useAuthContext();
  const registerHandler = async (username, email, password) => {
    const result = await register(username, email, password);
    const { password: _, ...authData } = result;

    changeAuthState(authData);

    return result;
  };
  return registerHandler;
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout: localLogout } = useAuthContext();

  const logoutHandler = async () => {
    localLogout();
    await logout();
    navigate('/logout');
  };
  return logoutHandler;
};
