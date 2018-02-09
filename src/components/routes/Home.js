import React, { Component } from 'react';

import { Footer } from '../presentation';
import { MapNavigation, Nav, SearchResults } from '../containers';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar" data-background-color="white" data-active-color="danger">
          <div className="sidebar-wrapper">

            <MapNavigation />

          </div>
        </div>

        <div className="main-panel">

          <Nav />

          <div className="content">

            <SearchResults />

          </div>

          <Footer />

        </div>
      </div>
    );
  }
}

export default Home;
