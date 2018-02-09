import React from 'react';
import { Modal } from 'react-bootstrap';

export default ({ show, onHide }) => (
  <Modal
    show={show}
    onHide={onHide}
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-lg">
        Welcome to React Flea-Market
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>About this Application</h4>
      <ul>
        <li>Move the map around to see nearby items listed for sale.</li>
        <li>Please create an account if you would like to post an item or contact a seller. There is no email verification process, but the email provided will be used when others want to contact you about your listings.</li>
        <li>When you create a listing, the item will be placed at the maps current center.</li>
        <li>Clicking on the image of an item will open a modal, allowing you to send an email to the seller. The email system uses SendGrid behind the scenes.</li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <span style={{ float: 'left' }}>Note: this service does not yet work properly on narrower viewports</span>
      <button
        className="btn btn-success btn-fill"
        onClick={onHide}
      >Got It!
      </button>
    </Modal.Footer>
  </Modal>
);

