import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({isLoggedIn }) => {
  if (isLoggedIn) {
    return <Outlet/>;
  }
  return <Navigate to="/signin" />;
};

export default ProtectedRoute;
