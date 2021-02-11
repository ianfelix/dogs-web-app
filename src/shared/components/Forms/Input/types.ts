import { FormEvent } from 'react';

export type inputProps = {
  label: string;
  type: string;
  name: string;
  formValues: string;
  handleInputChange: (event: FormEvent<HTMLInputElement>) => void;
  errorMessages: {
    [key: string]: string;
  };
};
