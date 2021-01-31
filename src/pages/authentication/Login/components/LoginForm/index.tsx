import { FormEvent, useState } from 'react';
import { LoginService } from '../../../../../services/authentication/LoginService';
import { Presentational } from './Presentational';
import { formValuesProps } from './types';

const LoginForm = () => {
  const [formValues, setFormValues] = useState<formValuesProps>({});

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormValues({ ...formValues, [name]: value });
    console.log('***', formValues);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const data = Object.fromEntries(formData);

    //req LoginService
    LoginService.post('jwt-auth/v1/token', {}).then((response) =>
      console.log(response.data),
    );
  };

  return (
    <Presentational
      formValues={formValues}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default LoginForm;
