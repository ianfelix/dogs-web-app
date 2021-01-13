import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
