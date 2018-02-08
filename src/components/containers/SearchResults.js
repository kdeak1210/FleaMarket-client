import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

import { APIManager } from '../../utils';
import { Item } from '../presentation';
import actions from '../../actions';

class SearchResults extends Component {
  state = {
    item: {},
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

  uploadImage = (files) => {
    const file = files[0];

    // Request an Amazon S3 signed url from the server
    APIManager.get('/upload/s3sign', {
      filename: file.name,
      filetype: file.type,
    })
      .then((response) => {
        console.log(response);
        const { signedUrl } = response;

        const options = {
          headers: {
            'Content-Type': file.type,
          },
        };

        // Try uploading the file to the signedUrl we received from Amazon
        return axios.put(signedUrl, file, options);
      })
      .then((response) => {
        if (response.status === 200) {
          // url: "https://react-flea-market.s3.us-east-2.amazonaws.com/midtown.jpeg?Content-Type= ... etc
          const { url } = response.config;
          const imageUrl = url.substr(0, url.indexOf('?'));
          console.log(imageUrl);

          this.setState({ item: { ...this.state.item, image: imageUrl } });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  submitItem = () => {
    const { currentUser } = this.props.account;
    if (currentUser === null) {
      alert('Please log in or register to add items');
      return;
    }
    const newItem = { ...this.state.item };
    newItem.id = this.props.item.all.length + 1;
    newItem.seller = {
      id: currentUser.id,
      username: currentUser.username,
      image: currentUser.image || '',
      email: currentUser.email,
    };

    const { lat, lng } = this.props.map.currentLocation;
    newItem.geo = [lat, lng]; // required format mongo geospatial query

    this.props.addItem(newItem);
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

  updateItem = (event) => {
    const { name, value } = event.target;
    this.setState({ item: { ...this.state.item, [name]: value } });
  }

  updateOrder = (event) => {
    const { value } = event.target;
    this.setState({ order: { ...this.state.order, message: value } });
  }

  render() {
    // const { all } = this.props.item || [];
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

        <div className="row">
          <div className="col-lg-3 col-sm-6">

            <div className="card">
              <div className="content">
                <div className="footer">
                  <h3>Add Item</h3>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    style={localStyle.inputField}
                    placeholder="Item Name"
                    onChange={this.updateItem}
                  />
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    style={localStyle.inputField}
                    placeholder="Price"
                    onChange={this.updateItem}
                  />
                  <hr />
                  <div className="stats">
                    { (this.state.item.image)
                      ? <img style={{ width: 240 }} src={this.state.item.image} alt="item" />
                      : null
                    }
                    <Dropzone
                      onDrop={this.uploadImage}
                      multiple={false}
                      style={{ marginRight: 16 }}
                      className="btn btn-info btn-fill"
                    >Upload Image
                    </Dropzone>
                    <button
                      className="btn btn-success"
                      onClick={this.submitItem}
                    >Add Item
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
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
  inputField: {
    marginBottom: 12,
    border: '1px solid #ddd',
  },
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
  addItem: item => dispatch(actions.addItem(item)),
  fetchItems: params => dispatch(actions.fetchItems(params)),
  submitOrder: order => dispatch(actions.submitOrder(order)),
  sendEmail: email => dispatch(actions.sendEmail(email)),
});

export default connect(stateToProps, dispatchToProps)(SearchResults);
