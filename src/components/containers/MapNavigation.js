import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Map } from '../presentation';

class MapNavigation extends Component {
  constructor() {
    super();
    this.setNewLocation = this.setNewLocation.bind(this);
  }

  setNewLocation(location) {
    // console.log('setNewLocation: ' + JSON.stringify(location))
    this.props.updateCurrentLocation(location);
  }

  centerChanged = (newCenter) => {
    console.log(`Center changed: ${JSON.stringify(newCenter)}`);
  }

  render() {
    const items = this.props.item.all || [];

    return (
      <div>
        <Map
          center={{ lat: 38.90, lng: -77.04 }}
          zoom={14}
          mapMoved={this.centerChanged}
          containerElement={
            <div style={{ height: '100vh' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          markers={items}
        />
      </div>
    );
  }
}

const stateToProps = state => ({
  item: state.item,
});

export default connect(stateToProps)(MapNavigation);
