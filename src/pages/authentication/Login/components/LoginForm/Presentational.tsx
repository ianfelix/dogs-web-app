import { Link } from 'react-router-dom';
import Button from '../../../../../shared/components/Forms/Button';
import Input from '../../../../../shared/components/Forms/Input';
import { Container } from './styles';
import { LoginFormProps } from './types';

export const Presentational = (props: LoginFormProps) => {
  const { handleInputChange, handleSubmit, formValues } = props;

  return (
    <Container>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input
          label='Usuário'
          type='text'
          name='username'
          formValues={formValues.username}
          handleInputChange={handleInputChange}
        />
        <Input
          label='Senha'
          type='password'
          name='password'
          formValues={formValues.password}
          handleInputChange={handleInputChange}
        />
        <Button>Enviar</Button>
      </form>

      <Link to='/login/criar'>Cadastro</Link>
    </Container>
  );
};
