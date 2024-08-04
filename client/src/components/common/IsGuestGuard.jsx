import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { useModal } from '../../contexts/ModalContext';

export default function IsGuestGuard() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const { openModal } = useModal();

  useEffect(() => {
    if (isAuthenticated) {
      openModal(<div>You should logout first to reach this page!</div>);
      navigate('/');
    }
  }, [isAuthenticated, navigate, openModal]);

  if (isAuthenticated) {
    return null;
  }

  return <Outlet />;
}
