import { inputProps } from './types';
import { Container } from './styles';

export const Presentational = ({ label, type, name }: inputProps) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type={type} />
    </Container>
  );
};
