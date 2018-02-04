import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Item } from '../presentation';
import actions from '../../actions';

class SearchResults extends Component {
  state = {

  }

  render() {
    const { all } = this.props.item || [];

    return (
      <div className="row">
        { all.map((item, i) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

const stateToProps = state => ({
  item: state.item,
});

export default connect(stateToProps)(SearchResults);
