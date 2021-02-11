import useForm from '../../../../../shared/hooks/useForm';
import { Presentational } from './Presentational';

const LoginForm = () => {
  const customForm = useForm();

  return <Presentational {...customForm} />;
};
export default LoginForm;
