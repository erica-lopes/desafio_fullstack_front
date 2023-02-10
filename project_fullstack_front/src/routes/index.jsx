import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
