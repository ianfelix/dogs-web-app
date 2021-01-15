import { ReactComponent as Dogs } from '../../../assets/illustrations/dogs.svg';
import { ReactComponent as Usuario } from '../../../assets/illustrations/usuario.svg';
import * as S from './styles';

export const Presentational = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.Logo to='/' aria-label='Dogs - Home'>
          <Dogs />
        </S.Logo>
        <S.Login to='login'>
          <div>Login / Criar</div>
          <Usuario />
        </S.Login>
      </S.Nav>
    </S.Header>
  );
};
