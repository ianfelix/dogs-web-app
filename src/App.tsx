import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import GlobalStyles from './shared/styles/global';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
