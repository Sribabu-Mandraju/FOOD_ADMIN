import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser === null ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
