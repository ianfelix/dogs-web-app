import axios from 'axios';

export const LoginService = axios.create({
  baseURL: 'https://dogsapi.origamid.dev/json/',
  headers: { 'Content-Type': 'application/json' },
});
