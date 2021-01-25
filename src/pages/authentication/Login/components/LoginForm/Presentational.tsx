import { Link } from 'react-router-dom';
import { Container } from './styles';
import { LoginFormProps } from './types';
import Input from '../../../../../shared/components/Forms/Input';
import Button from '../../../../../shared/components/Forms/Button';

export const Presentational = (props: LoginFormProps) => {
  const {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleSubmit,
  } = props;

  return (
    <Container>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' />
        <Input label='Senha' type='password' name='password' />
        <Button>Enviar</Button>
      </form>

      <Link to='/login/criar'>Cadastro</Link>
    </Container>
  );
};
