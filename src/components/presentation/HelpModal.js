import React from 'react';
import { Modal } from 'react-bootstrap';

export default () => (
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
        placeholder="Enter message here"
      />
      <button onClick={this.submitOrder} className="btn btn-success btn-fill">
              Email seller
      </button>
    </Modal.Body>
  </Modal>
);

