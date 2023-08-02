import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailChecker, passwordChecker } from '../Verificadores';
import { actionUserData } from '../actions';

// Pedi ajuda ao Gessé, muito obrigado !
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invalidUser: true,
      invalidPassword: true,
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePass = this.validatePass.bind(this);
  }

  validateEmail({ target: { value } }) {
    const email = emailChecker(value);
    if (email) {
      return this.setState({
        email: value,
        invalidUser: false,
      });
    }
    return this.setState({
      email: value,
      invalidUser: true,
    });
  }

  validatePass({ target: { value } }) {
    const password = passwordChecker(value);
    if (password) {
      return this.setState({
        password: value,
        invalidPassword: false,
      });
    }
    return this.setState({
      password: value,
      invalidPassword: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setEmailToStore } = this.props;
    const { email, password } = this.state;

    setEmailToStore(({
      email,
      password,
    }));

    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect, invalidUser, invalidPassword } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <form className="Login-Form-Container" onSubmit={ this.handleSubmit }>
          <label htmlFor="Login-Form">
            <input
              type="text"
              data-testid="email-input"
              name="Login-Form"
              className="Login-Form"
              placeholder="Usuário..."
              onChange={ this.validateEmail }
            />
            <input
              type="text"
              data-testid="password-input"
              name="Login-Form"
              className="Login-Form"
              placeholder="Senha..."
              minLength="6"
              onChange={ this.validatePass }
            />
            <input
              type="submit"
              disabled={ invalidUser || invalidPassword }
              value="Entrar"
            />
          </label>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setEmailToStore: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setEmailToStore: (value) => dispatch(actionUserData(value)),
});

export default connect(null, mapDispatchToProps)(Login);
