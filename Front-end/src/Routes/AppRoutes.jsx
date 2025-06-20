import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import RecuperarSenha from '../Pages/Recover';
import NotFound from '../Pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover-password" element={<RecuperarSenha />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;