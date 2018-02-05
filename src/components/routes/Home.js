import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Footer, Nav } from '../presentation';
import { MapNavigation, SearchResults } from '../containers';
import actions from '../../actions';

class Home extends Component {
  componentDidMount() {
    if (this.props.account.user === null) {
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

  render() {
    const user = this.props.account.user || null;

    return (
      <div className="wrapper">
        <div className="sidebar" data-background-color="white" data-active-color="danger">
          <div className="sidebar-wrapper">

            <MapNavigation />

          </div>
        </div>

        <div className="main-panel">

          <Nav user={user} />

          <div className="content">

            <SearchResults />

          </div>

          <Footer />

        </div>
      </div>
    );
  }
}

const stateToProps = state => ({
  account: state.account,
});

const dispatchToProps = dispatch => ({
  checkCurrentUser: params => dispatch(actions.checkCurrentUser(params)),
});

export default connect(stateToProps, dispatchToProps)(Home);
