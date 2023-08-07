import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { emailChecker, passwordChecker } from '../../validations';
import { actionUserData } from '../../actions';
import styles from './style.module.scss';
import Image from 'next/image';

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
    <div className={styles.loginWrapper}>
      <form className="Login-Form-Container" onSubmit={handleSubmit}>
        <Image src="/images/logo.png" alt='Wallet Logo' width={300} height={150}/>

        <label htmlFor="loginUser">
          <input
            autoComplete='off'
            type="email"
            data-testid="email-input"
            name="loginUser"
            placeholder="Usuário"
            onChange={validateEmail}
          />
        <label />
        <label htmlFor=""></label>
          <input
            type="password"
            data-testid="password-input"
            name="loginPass"
            placeholder="Senha"
            minLength="6"
            onChange={validatePass}
          />
        </label>
        <input type="submit" disabled={invalidUser || invalidPassword} value="Entrar" />
      </form>
    </div>
  );
};

Login.propTypes = {
  setEmailToStore: PropTypes.func,
};

export default Login;
