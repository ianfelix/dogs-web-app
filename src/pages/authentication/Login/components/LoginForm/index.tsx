import { FormEvent, useCallback, useState } from 'react';
import { LoginService } from '../../../../../services/authentication/LoginService';
import { Presentational } from './Presentational';
import { formValuesProps } from './types';
import * as Yup from 'yup';

const LoginForm = () => {
  const [formValues, setFormValues] = useState<formValuesProps>({});

  const handleInputChange = useCallback(
    async (event: FormEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      setFormValues({ ...formValues, [name]: value });
      console.log(formValues);
    },
    [formValues],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const schema = Yup.object().shape({
          username: Yup.string().required('E-mail obrigatório').email(),
          password: Yup.string().required().min(3, 'Mínimo de 3 caracteres'),
        });
        await schema.validate(formValues);

        LoginService.post('jwt-auth/v1/token', {}).then((response) =>
          console.log(response.data),
        );
      } catch (error) {
        console.error(error);
      }
    },
    [formValues],
  );

  return (
    <Presentational
      formValues={formValues}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default LoginForm;
