import React, { Component } from 'react';

import { Footer, Item, Nav } from '../presentation';
import MapNavigation from '../containers/MapNavigation';

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
              <div className="row">

                <Item />
                <Item />
                <Item />
                <Item />

              </div>
            </div>
          </div>

          <Footer />

        </div>
      </div>
    );
  }
}

export default Home;
