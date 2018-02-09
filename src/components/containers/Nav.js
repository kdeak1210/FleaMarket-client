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
    const { currentUser } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">React FleaMarket</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              { currentUser ? (
                <React.Fragment>
                  <li>
                    <a>Welcome {currentUser.username}</a>
                  </li>
                  <li>
                    <button
                      className="btn btn-lg btn-danger"
                      onClick={this.logout}
                    >Logout
                    </button>
                  </li>
                </React.Fragment>
              ) : (
                <li>
                  <Link to="/auth">
                    <button className="btn btn-lg btn-success">Login</button>
                  </Link>
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

