import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/authentication/Login';

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
    </Routes>
  );
};

export default MainRoute;
