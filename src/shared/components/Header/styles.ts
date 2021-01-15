import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: white;
  top: 0;
`;
export const Nav = styled.nav`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  padding: 0.5rem 0;
`;
export const Login = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  div {
    margin-right: 0.5rem;
  }
`;
