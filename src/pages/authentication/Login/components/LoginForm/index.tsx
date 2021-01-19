import { useState } from 'react';
import { Presentational } from './Presentational';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (event: any) => setUsername(event.target.value);
  const handleChangePassword = (event: any) => setPassword(event.target.value);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // axios here
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
