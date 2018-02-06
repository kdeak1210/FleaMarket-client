import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import actions from '../../actions';

class Nav extends Component {
  logout = () => {
    this.props.logout();
    localStorage.removeItem('jwtToken');
  }

  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Dashboard</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              { user ? (
                <React.Fragment>
                  <li>
                    <a>Welcome {user.username}</a>
                  </li>
                  <li>
                    <button
                      className="btn btn-danger"
                      onClick={this.logout}
                    >Logout
                    </button>
                  </li>
                </React.Fragment>
              ) : (
                <li>
                  <Link to="/auth">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const dispatchToProps = dispatch => ({
  logout: () => dispatch(actions.logout()),
});

export default connect(null, dispatchToProps)(Nav);

