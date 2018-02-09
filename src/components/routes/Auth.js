/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import actions from '../../actions'

class Auth extends Component {
  state = {
    renderLogin: true,
    credentials: {
      username: '',
      email: '',
      password: '',
    }
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
    if (this.state.renderLogin) {
      this.props.login(this.state.credentials)
      .then((response) => {
        // Successful login, set the token, redirect them
        const { token } = response;
        if (token) {
          localStorage.setItem('jwtToken', token);
        }
        this.props.history.push('/');
      })
      .catch(err => alert(err))
    } else {
      this.props.register(this.state.credentials)
      .then((response) => {
        // Successful register, set the token, redirect them
        const { token } = response;
        if (token) {
          localStorage.setItem('jwtToken', token);
        }
        this.props.history.push('/');        
      })
      .catch(err => alert(err))
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
                
                { renderLogin ? null : (
                  <input
                  type="text"
                  name="username"
                  className="form-control"
                  style={localStyle.inputField}
                  placeholder="username"
                  onChange={this.updateCredentials}
                />
                )}
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    style={localStyle.inputField}
                    placeholder="email"
                    onChange={this.updateCredentials}
                  />
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  style={localStyle.inputField}
                  placeholder="password"
                  onChange={this.updateCredentials}
                />
                <hr />
                <div className="stats">
                  <button
                    className={`btn btn-lg btn-${renderLogin ? 'info' : 'primary'}`}
                    onClick={this.submitForm}
                  >{selectedForm}
                  </button>
                </div>
                <h5
                  style={{ float: 'right', cursor: 'pointer', color: '#0645AD' }}
                  onClick={this.toggleForm}
                >Switch to {otherForm}
                </h5>
              </div>
            </div>
          </div>
          <Link to="/"><h5>...Or Just Return to the Map</h5></Link>
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

const dispatchToProps = dispatch => ({
  login: params => dispatch(actions.login(params)),
  register: params => dispatch(actions.register(params))
})

export default withRouter(connect(null, dispatchToProps)(Auth));

