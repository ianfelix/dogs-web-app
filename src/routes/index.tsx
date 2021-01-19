import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/authentication/Login';
import LoginForm from '../pages/authentication/Login/components/LoginForm';
import LoginCreate from '../pages/authentication/Login/components/LoginCreate';
import LoginPasswordLost from '../pages/authentication/Login/components/LoginPasswordLost';
import LoginPasswordReset from '../pages/authentication/Login/components/LoginPasswordReset';

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />}>
        <Route path='/' element={<LoginForm />} />
        <Route path='criar' element={<LoginCreate />} />
        <Route path='esqueci' element={<LoginPasswordLost />} />
        <Route path='resetar' element={<LoginPasswordReset />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
