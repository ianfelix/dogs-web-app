export type LoginFormProps = {
  username: string;
  password: string;
  handleChangeUsername: (username: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (password: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
