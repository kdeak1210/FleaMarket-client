import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AddItem, Map } from '../presentation';
import actions from '../../actions';

class MapNavigation extends Component {
  createMarkers = (items) => {
    const markers = [];
    if (items.length === 0) {
      return markers;
    }

    items.forEach((item) => {
      // transform item's geo property to be google-maps compliant (latlng object)
      const latlng = {
        lat: item.geo[0],
        lng: item.geo[1],
      };

      const marker = {
        key: item.id,
        label: item.name,
        position: latlng,
        defaultAnimation: 2,
      };

      markers.push(marker);
    });

    return markers;
  }

  centerChanged = (newCenter) => {
    // console.log(`Center changed: ${JSON.stringify(newCenter)}`);
    this.props.locationChanged(newCenter);
  }

  render() {
    const items = this.props.item.all || [];
    const markers = this.createMarkers(items);

    return (
      <div style={localStyle.flexWrapper}>
        <Map
          center={this.props.map.currentLocation}
          zoom={14}
          mapMoved={this.centerChanged}
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          markers={markers}
        />
        <AddItem />
      </div>
    );
  }
}

const localStyle = {
  flexWrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
};

const stateToProps = state => ({
  item: state.item,
  map: state.map,
});

const dispatchToProps = dispatch => ({
  locationChanged: location => dispatch(actions.locationChanged(location)),
});

export default connect(stateToProps, dispatchToProps)(MapNavigation);
