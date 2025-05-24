import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AuthRoutes } from '../context/Routes';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to={AuthRoutes.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute; 