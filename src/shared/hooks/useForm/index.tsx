import { FormEvent, useCallback, useState } from 'react';
import { formValuesProps } from '../../../pages/authentication/Login/components/LoginForm/types';
import { LoginService } from '../../../services/authentication/LoginService';
import * as Yup from 'yup';

const useForm = () => {
  const [formValues, setFormValues] = useState<formValuesProps>({});
  const [errorMessages, setErrorMessages] = useState({});

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
          username: Yup.string()
            .required('E-mail obrigatório')
            .email('Deve ser um e-mail válido'),
          password: Yup.string().min(3, 'Mínimo de 3 caracteres'),
        });

        await schema.validate(formValues, {
          abortEarly: false,
        });

        LoginService.post('jwt-auth/v1/token', {}).then((response) =>
          console.log(response.data),
        );

        setErrorMessages({
          username: '',
          password: '',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errorMessage: any = {};

          error.inner.forEach((error) => {
            errorMessage[error.path ?? 0] = error.message;
          });

          setErrorMessages(errorMessage);
          console.log(errorMessages);
        }
      }
    },
    [formValues, errorMessages],
  );

  return {
    formValues,
    setFormValues,
    handleInputChange,
    handleSubmit,
    errorMessages,
  };
};

export default useForm;
