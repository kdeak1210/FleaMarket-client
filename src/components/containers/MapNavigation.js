import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Map } from '../presentation';
import actions from '../../actions';

class MapNavigation extends Component {
  centerChanged = (newCenter) => {
    // console.log(`Center changed: ${JSON.stringify(newCenter)}`);
    this.props.locationChanged(newCenter);
  }

  render() {
    const items = this.props.item.all || [];
    const markers = [];

    items.forEach((item) => {
      const marker = {
        key: item.id,
        label: item.name,
        position: item.position,
        defaultAnimation: 2,
      };

      markers.push(marker);
    });

    return (
      <div>
        <Map
          center={this.props.map.currentLocation}
          zoom={14}
          mapMoved={this.centerChanged}
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

const stateToProps = state => ({
  item: state.item,
  map: state.map,
});

const dispatchToProps = dispatch => ({
  locationChanged: location => dispatch(actions.locationChanged(location)),
});

export default connect(stateToProps, dispatchToProps)(MapNavigation);
