import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Presentational = () => {
  return (
    <Container>
      <h1>LoginForm</h1>
      <Link to='/login/criar'>Criar</Link>
    </Container>
  );
};
