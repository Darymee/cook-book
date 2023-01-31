import { Link } from 'react-router-dom';

import { Title } from 'components/UI/Title/Title';

import { ModalWrapper, Form } from './Login.styled';

export const Login = () => {
  return (
    <>
      <Title>Login</Title>
      <ModalWrapper>
        <Form>
          <input />
          <input />
          <button type="submit">Login</button>
        </Form>
        <p>
          Are you still not with us? <Link to="register">Sign up</Link>
        </p>
      </ModalWrapper>
    </>
  );
};
