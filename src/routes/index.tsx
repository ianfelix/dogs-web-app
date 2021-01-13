import { Routes, Route } from 'react-router-dom';

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default MainRoute;
