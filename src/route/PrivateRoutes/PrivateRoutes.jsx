import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children || <Outlet />;
  } else {
    return <Navigate to="/" replace={true}/>;
  }
};

export default PrivateRoute;