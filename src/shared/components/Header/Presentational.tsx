import { Link } from 'react-router-dom';
import * as S from './styles';

export const Presentational = () => {
  return (
    <S.Nav>
      <Link to='/'>Home</Link>
      <Link to='login'>Login / Criar</Link>
    </S.Nav>
  );
};
