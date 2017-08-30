import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';
import './signin.css';

const SigninProgress = ({ logining }) => {
  return (
    <LinearProgress
      mode="indeterminate"
      className="portal-signin-progress"
      style={{ display: logining ? 'block' : 'none' }}
    />
  );
};
SigninProgress.propTypes = {
  logining: PropTypes.bool.isRequired,
};
const SignInForm = ({ logining, openError, login, handleInputChange }) => {
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      login();
    }
  };
  return (
    <div className="portal-signin-form">
      <div className="portal-logo">
        <span className="portal-logo-img" />
      </div>
      <div>
        <TextField
          name="userName"
          hintText="Input guest as a guest"
          errorText={openError ? 'Username or password is wrong' : ''}
          fullWidth
          floatingLabelText="Pls input user name..."
          onChange={handleInputChange}
        />
        <TextField
          name="userPassword"
          type="password"
          hintText="Input guest as a guest"
          errorText={openError ? 'Username or password is wrong' : ''}
          fullWidth
          floatingLabelText="Pls input password..."
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
        />
      </div>
      <div className="portal-signin-bts">
        <RaisedButton
          label="Login"
          primary
          onClick={login}
          style={{ margin: 12 }}
          disabled={!!logining}
        />
      </div>
    </div>
  );
};
SignInForm.propTypes = {
  logining: PropTypes.bool.isRequired,
  openError: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};
class SignIn extends React.Component {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
  };
  state = {
    logining: false,
    openError: false,
  };
  handleLoginResult = result => {
    if (result && result.status === 'SUCCESS') {
      this.props.history.push('/home');
    } else {
      this.setState({
        logining: false,
        openError: true,
      });
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    this.setState({
      fields: { ...this.state.fields, [name]: target.value },
    });
  };
  login = () => {
    this.setState({
      logining: true,
      openError: false,
    });
    fetch('/api/portal/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.fields),
    })
      .then(response => {
        return response.json();
      })
      .then(this.handleLoginResult)
      .catch(this.handleLoginResult);
  };
  render() {
    return (
      <div>
        <SigninProgress logining={this.state.logining} />
        <SignInForm
          openError={this.state.openError}
          logining={this.state.logining}
          login={this.login}
          handleInputChange={this.handleInputChange}
        />
        <Snackbar
          open={this.state.openError}
          message="Your username or password is wrong!"
          autoHideDuration={2000}
        />
      </div>
    );
  }
}

export default SignIn;
