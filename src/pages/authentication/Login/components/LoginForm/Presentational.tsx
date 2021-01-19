import { Link } from 'react-router-dom';
import { Container } from './styles';
import { LoginFormProps } from './types';

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
        <input type='text' value={username} onChange={handleChangeUsername} />
        <input type='text' value={password} onChange={handleChangePassword} />
        <button>Entrar</button>
      </form>

      <Link to='/login/criar'>Cadastro</Link>
    </Container>
  );
};
