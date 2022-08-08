import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from './CurrentUserContext';


export const ProtectedRoute = () => {
  const {isLoggedIn} = useContext(CurrentUserContext)
  return (
    isLoggedIn ? <Outlet/> : <Navigate to="/signin" />
  )
}
