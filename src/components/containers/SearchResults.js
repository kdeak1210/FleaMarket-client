import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import { Item } from '../presentation';
import actions from '../../actions';

class SearchResults extends Component {
  state = {
    order: {},
    showModal: false,
    selectedItem: {},
  }

  componentDidMount() {
    console.log('CDM');
    const { currentLocation } = this.props.map;
    this.props.fetchItems(currentLocation);
  }

  componentDidUpdate() {
    console.log('CDU');
    const { currentLocation } = this.props.map;

    if (!this.props.item.all) {
      this.props.fetchItems(currentLocation);
    }
  }

  onPurchase = (item, event) => {
    event.preventDefault();
    this.setState({
      showModal: true,
      selectedItem: item,
    });
  }

  submitOrder = () => {
    const order = { ...this.state.order };
    order.item = this.state.selectedItem;

    const { id, username, email } = this.props.account.currentUser;
    order.buyer = {
      id,
      username,
      email,
    };

    this.props.submitOrder(order)
      .then((response) => {
        const { result: orderPayload } = response;
        return this.props.sendEmail(orderPayload);
      })
      .then((resp) => {
        console.log(resp);
        alert('Your email has been sent!');
        this.setState({ showModal: false, selectedItem: null });
      })
      .catch(err => console.log(err));
  }

  updateOrder = (event) => {
    const { value } = event.target;
    this.setState({ order: { ...this.state.order, message: value } });
  }

  render() {
    // const { all } = this.props.item || []; // GOTCHA w/ destructuring
    const all = this.props.item.all || [];

    return (
      <div className="container-fluid">

        <div className="row">
          { all.map(item => (
            <Item
              onPurchase={event => this.onPurchase(item, event)}
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <Modal
          bsSize="sm"
          show={this.state.showModal}
          onHide={() => { this.setState({ showModal: false }); }}
        >
          <Modal.Body>
            <h3>Purchase this Item</h3>
            <hr />
            <textarea
              onChange={this.updateOrder}
              className="form-control"
              style={localStyle.textarea}
              placeholder="Enter message here"
            />
            <button onClick={this.submitOrder} className="btn btn-success btn-fill">
              Email seller
            </button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const localStyle = {
  textarea: {
    border: '1px solid #ddd',
    height: 160,
    marginBottom: 16,
  },
};

const stateToProps = state => ({
  account: state.account,
  item: state.item,
  map: state.map,
});

const dispatchToProps = dispatch => ({
  fetchItems: params => dispatch(actions.fetchItems(params)),
  submitOrder: order => dispatch(actions.submitOrder(order)),
  sendEmail: email => dispatch(actions.sendEmail(email)),
});

export default connect(stateToProps, dispatchToProps)(SearchResults);
