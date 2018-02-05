/* eslint-disable */

import React, { Component } from 'react';

class Login extends Component {
  state = {
    renderLogin: true,
    credentials: {
      username: '',
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    // console.log(this.props);
  }

  toggleForm = () => {
    // console.log('toggle');
    this.setState(prev => ({renderLogin: !prev.renderLogin}))
  }

  updateCredentials = (event) => {
    const updatedCredentials = { ...this.state.credentials };
    updatedCredentials[event.target.name] = event.target.value;
    this.setState({ credentials: updatedCredentials });
  }

  submitForm = () => {
    console.log(this.state);
    if (this.state.renderLogin) {
      console.log('Submit Login');
      // LOGIN ACITON
    } else {
      console.log('Submit Register');
      // REGISTER ACTION
    }
  }

  render() {
    const { renderLogin, username, password } = this.state;
    const selectedForm = renderLogin ? 'Login' : 'Register';
    const otherForm = renderLogin ? 'Register' : 'Login';

    return (
      <div className="container-fluid">
        <div className="col-md-offset-3 col-md-6">
          <div className="card">
            <div className="content">
              <h3>{selectedForm} Form</h3>
              <div className="footer">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  style={localStyle.inputField}
                  placeholder="username"
                  onChange={this.updateCredentials}
                />
                { renderLogin ? null : (
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    style={localStyle.inputField}
                    placeholder="email"
                    onChange={this.updateCredentials}
                  />
                )}
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  style={localStyle.inputField}
                  placeholder="password"
                  onChange={this.updateCredentials}
                />
                <hr />
                <div className="stats">
                  <button
                    className={`btn btn-${renderLogin ? 'info' : 'primary'}`}
                    onClick={this.submitForm}
                  >{selectedForm}
                  </button>
                </div>
                <p
                  style={{ float: 'right', cursor: 'pointer', color: '#0645AD' }}
                  onClick={this.toggleForm}
                >Switch to {otherForm}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const localStyle = {
  inputField: {
    marginBottom: 12,
    border: '1px solid #ddd',
  },
};

export default Login;

