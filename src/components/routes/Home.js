import React, { Component } from 'react';

import { Footer, Nav } from '../presentation';
import { MapNavigation, SearchResults } from '../containers';

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
            <div className="container-fluid">

              <SearchResults />

            </div>
          </div>

          <Footer />

        </div>
      </div>
    );
  }
}

export default Home;
