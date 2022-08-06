import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({isLoggedIn }) => isLoggedIn ? <Outlet/> : <Navigate to="/signin" />;