import { ButtonProps } from './types';
import * as S from './styles';

export const Presentational = ({ children, ...props }: ButtonProps) => (
  <S.Container>
    <S.Button {...props}>{children}</S.Button>
  </S.Container>
);
