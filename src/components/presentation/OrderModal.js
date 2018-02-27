import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class OrderModal extends Component {
  state = {
    order: {},
  }

  onSubmitOrder = () => {
    const order = { ...this.state.order };
    if (!order.message) {
      alert('Please enter some message content!');
      return;
    }
    order.item = this.props.selectedItem;
    this.props.submitOrder(order);
  }

  updateOrder = (event) => {
    const { value } = event.target;
    this.setState({ order: { ...this.state.order, message: value } });
  }

  render() {
    const item = this.props.selectedItem || {};
    const seller = item.seller || {};

    return (
      <Modal
        bsSize="sm"
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Body>
          <h3>{`Purchase ${item.name || 'item'} - $${item.price || '0'}`}</h3>
          <hr />
          <textarea
            onChange={this.updateOrder}
            className="form-control"
            style={localStyle.textarea}
            placeholder="Enter message here"
          />
          <button
            onClick={this.onSubmitOrder}
            className="btn btn-success btn-fill"
          >Email {seller.username || 'seller'}
          </button>
        </Modal.Body>
      </Modal>
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

export default OrderModal;
