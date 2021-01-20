import { useState } from 'react';
import { LoginService } from '../../../../../services/authentication/LoginService';
import { Presentational } from './Presentational';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (event: any) => setUsername(event.target.value);
  const handleChangePassword = (event: any) => setPassword(event.target.value);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    //req LoginService
    LoginService.post('jwt-auth/v1/token', {
      username,
      password,
    }).then((response) => console.log(response.data));
  };

  return (
    <Presentational
      username={username}
      password={password}
      handleChangeUsername={handleChangeUsername}
      handleChangePassword={handleChangePassword}
      handleSubmit={handleSubmit}
    />
  );
};
export default LoginForm;
