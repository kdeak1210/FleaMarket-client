import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  state = {
    map: null,
  };

  mapDragged = () => {
    const latLng = this.state.map.getCenter().toJSON();
    // console.log('map dragged: ' + JSON.stringify(latLng))
    this.props.mapMoved(latLng);
  }

  render() {
    const markers = this.props.markers || [];

    return (
      <GoogleMap
        ref={(map) => {
            if (this.state.map != null) { return; }
            this.setState({ map });
          }
        }
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
        onDragEnd={this.mapDragged}
      >
        {markers.map(marker => <Marker {...marker} />)}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
