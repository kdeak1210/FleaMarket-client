import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { InfoModal } from '../presentation';
import actions from '../../actions';

class Nav extends Component {
  state = {
    showInfoModal: false,
  }

  componentDidMount() {
    if (this.props.account.currentUser === null) {
      this.getUserFromToken();
    }
  }

  getUserFromToken = () => {
    const token = localStorage.getItem('jwtToken');
    if (!token || token === '') {
      return;
    }
    this.props.checkCurrentUser({ token })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  logout = () => {
    this.props.logout();
    localStorage.removeItem('jwtToken');
  }

  toggleModal = () => {
    this.setState(prev => ({ showInfoModal: !prev.showInfoModal }));
  }

  render() {
    const { currentUser } = this.props.account;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <h4 className="navbar-brand">React FleaMarket</h4>
          </div>
          <ul className="nav navbar-nav navbar-right">
            { currentUser ? (
              <React.Fragment>
                <li>
                  <h4 style={{ marginRight: 18 }}>Welcome {currentUser.username}</h4>
                </li>
                <li>
                  <a>
                    <button
                      className="btn btn-lg btn-danger"
                      onClick={this.logout}
                    >Logout
                    </button>
                  </a>
                </li>
              </React.Fragment>
              ) : (
                <li>
                  <Link to="/auth">
                    <button className="btn btn-lg btn-success">Login</button>
                  </Link>
                </li>
              )}
            <li>
              <a>
                <button
                  className="btn btn-lg btn-info"
                  onClick={this.toggleModal}
                >Info
                </button>
              </a>
            </li>
          </ul>
          <InfoModal show={this.state.showInfoModal} onHide={this.toggleModal} />
        </div>
      </nav>
    );
  }
}

const stateToProps = state => ({
  account: state.account,
});

const dispatchToProps = dispatch => ({
  checkCurrentUser: params => dispatch(actions.checkCurrentUser(params)),
  logout: () => dispatch(actions.logout()),
});

export default connect(stateToProps, dispatchToProps)(Nav);

