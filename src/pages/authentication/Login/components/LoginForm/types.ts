import { FormEvent } from 'react';

export type formValuesProps = {
  [key: string]: string;
};
export type LoginFormProps = {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: FormEvent<HTMLInputElement>) => void;
  formValues: formValuesProps;
  errorMessages: {
    [key: string]: string;
  };
};
