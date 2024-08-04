import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { useModal } from '../../contexts/ModalContext';

export default function AuthGuard() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const { openModal } = useModal();

  useEffect(() => {
    if (!isAuthenticated) {
      openModal(<div>You are not authenticated to reach this page!</div>);
      navigate('/login');
    }
  }, [isAuthenticated, navigate, openModal]);

  if (!isAuthenticated) {
    return null;
  }

  return <Outlet />;
}
