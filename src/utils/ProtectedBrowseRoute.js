import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedBrowseRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  
  // If user is authenticated, render children; otherwise, redirect to "/"
  return user ? children : <Navigate to="/" replace={ true} />;
};

export default ProtectedBrowseRoute;
