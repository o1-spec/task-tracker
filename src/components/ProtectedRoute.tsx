import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/sign-up" />;
};

export default ProtectedRoute;
