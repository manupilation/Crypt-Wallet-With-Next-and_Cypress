import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { emailChecker, passwordChecker } from '../validations';
import { actionUserData } from '../actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUser, setInvalidUser] = useState(true);
  const [invalidPassword, setInvalidPassword] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const setEmailToStore = (value) => dispatch(actionUserData(value));

  useEffect(() => {
    if (redirect) {
      router.push('/wallet');
    }
  }, [redirect]);

  const validateEmail = (event) => {
    const { value } = event.target;
    const emailIsValid = emailChecker(value);
    setEmail(value);
    setInvalidUser(!emailIsValid);
  };

  const validatePass = (event) => {
    const { value } = event.target;
    const passwordIsValid = passwordChecker(value);
    setPassword(value);
    setInvalidPassword(!passwordIsValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!invalidUser && !invalidPassword) {
      setEmailToStore({
        email,
        password,
      });
      setRedirect(true);
    }
  };

  return (
    <div>
      <form className="Login-Form-Container" onSubmit={handleSubmit}>
        <label htmlFor="Login-Form">
          <input
            type="text"
            data-testid="email-input"
            name="Login-Form"
            className="Login-Form"
            placeholder="Usuário..."
            onChange={validateEmail}
          />
          <input
            type="password"
            data-testid="password-input"
            name="Login-Form"
            className="Login-Form"
            placeholder="Senha..."
            minLength="6"
            onChange={validatePass}
          />
          <input type="submit" disabled={invalidUser || invalidPassword} value="Entrar" />
        </label>
      </form>
    </div>
  );
};

Login.propTypes = {
  setEmailToStore: PropTypes.func.isRequired,
};

export default Login;
