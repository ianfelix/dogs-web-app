import { Outlet } from 'react-router-dom';
import { Container } from './styles';

export const Presentational = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}