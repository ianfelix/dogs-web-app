import { Container } from './styles';
import { inputProps } from './types';

export const Presentational = (props: inputProps) => {
  const { label, type, name, formValues, handleInputChange } = props;

  console.log(formValues);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        onChange={handleInputChange}
        value={formValues}
      />
      <p>Error</p>
    </Container>
  );
};
