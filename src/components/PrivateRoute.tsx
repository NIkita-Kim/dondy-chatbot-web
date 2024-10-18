import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import { ReactNode } from 'react';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />
  }

  return children
}

export default PrivateRoute