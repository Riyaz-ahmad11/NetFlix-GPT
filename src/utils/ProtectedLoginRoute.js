
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedLoginRoute = ({ children }) => {
    const user = useSelector((store) => store.user);
   
    return user ? <Navigate to="/Browse" replace={ true} /> : children;  // it should return a comp -> dont use navigate("/Browse") as it does not return anything->undefined
}

export default ProtectedLoginRoute;