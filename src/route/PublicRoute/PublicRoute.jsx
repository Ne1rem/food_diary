import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return children || <Outlet />;
  } else {
    return <Navigate to="/main" replace={true} />;
  }
};

export default PublicRoute;