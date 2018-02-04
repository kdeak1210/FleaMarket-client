import React, { Component } from 'react';

import { Item } from '../presentation';

class SearchResults extends Component {
  state = {

  }

  render() {
    const items = [
      {
        id: 1, key: 1, defaultAnimation: 2, label: 'Television', price: 100, position: { lat: 38.903, lng: -77.043 },
      },
      {
        id: 2, key: 2, defaultAnimation: 2, label: 'Couch', price: 250, position: { lat: 38.897, lng: -77.042 },
      },
    ];

    return (
      <div className="row">
        { items.map((item, i) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
