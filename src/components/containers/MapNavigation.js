import React, { Component } from 'react';
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

  render() {
    const markers = [
      {
        id: 1, key: 1, defaultAnimation: 2, label: 'Television', position: { lat: 38.903, lng: -77.043 },
      },
      {
        id: 2, key: 2, defaultAnimation: 2, label: 'Couch', position: { lat: 38.897, lng: -77.042 },
      },
    ];

    return (
      <div>
        <Map
          center={{ lat: 38.90, lng: -77.04 }}
          zoom={14}
          mapMoved={console.log('Map moved')}
          containerElement={
            <div style={{ height: '100vh' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          markers={markers}
        />
      </div>
    );
  }
}

export default MapNavigation;
