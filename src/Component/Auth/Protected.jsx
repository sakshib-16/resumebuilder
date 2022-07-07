import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("loginSession");
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
