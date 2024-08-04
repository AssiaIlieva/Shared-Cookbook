import { useLogout } from '../../hooks/useAuth';

export default function Logout() {
  const logout = useLogout();

  logout();
}
