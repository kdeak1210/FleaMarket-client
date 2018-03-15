import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Item, OrderModal } from '../presentation';
import actions from '../../actions';

class SearchResults extends Component {
  state = {
    showOrderModal: false,
    selectedItem: null,
  }

  componentDidMount() {
    this.getItems();
  }

  componentDidUpdate() {
    this.getItems();
  }

  // eslint-disable-next-line react/sort-comp
  getItems = () => {
    const { currentLocation } = this.props.map;
    if (!this.props.item.all) {
      this.props.fetchItems(currentLocation)
      .catch(err => console.log(JSON.stringify(err)));
    }
  }

  onPurchase = (item, event) => {
    event.preventDefault();
    this.setState({ showOrderModal: true, selectedItem: item });
  }

  submitOrder = (order) => {
    const orderWithBuyer = { ...order };
    const { id, username, email } = this.props.account.currentUser;
    orderWithBuyer.buyer = {
      id,
      username,
      email,
    };

    this.props.submitOrder(orderWithBuyer)
      .then((response) => {
        const { result: orderPayload } = response;
        return this.props.sendEmail(orderPayload);
      })
      .then((resp) => {
        console.log(resp);
        alert('Your email has been sent!');
        this.setState({ showOrderModal: false, selectedItem: null });
      })
      .catch(err => console.log(err));
  }

  removeItem = (itemId) => {
    this.props.removeItem(itemId)
      .then(() => alert('item removed'))
      .catch(err => alert(err));
  }

  toggleModal = () => {
    this.setState(prev => ({ showOrderModal: !prev.showOrderModal }));
  }

  render() {
    // const { all } = this.props.item || []; // GOTCHA w/ destructuring
    const all = this.props.item.all || [];
    const { currentUser } = this.props.account;

    return (
      <div className="container-fluid">
        <div className="row">
          {!all.length ? <h3>No Nearby Items</h3> : (
          all.map((item) => {
            const isMine = currentUser && (item.seller.id === currentUser.id);
            return (
              <Item
                key={item.id}
                onPurchase={event => this.onPurchase(item, event)}
                onRemove={this.removeItem}
                item={item}
                isMine={isMine}
              />
            );
          }))}
        </div>
        <OrderModal
          show={this.state.showOrderModal}
          onHide={this.toggleModal}
          selectedItem={this.state.selectedItem}
          submitOrder={this.submitOrder}
          currentUser={currentUser}
        />
      </div>
    );
  }
}

const stateToProps = state => ({
  account: state.account,
  item: state.item,
  map: state.map,
});

const dispatchToProps = dispatch => ({
  fetchItems: params => dispatch(actions.fetchItems(params)),
  submitOrder: order => dispatch(actions.submitOrder(order)),
  sendEmail: email => dispatch(actions.sendEmail(email)),
  removeItem: id => dispatch(actions.removeItem(id)),
});

export default connect(stateToProps, dispatchToProps)(SearchResults);
