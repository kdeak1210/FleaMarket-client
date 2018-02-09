import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import { APIManager } from '../../utils';

class AddItem extends Component {
  state = {
    name: '',
    price: '',
    image: '',
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

          this.setState({ image: imageUrl });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateItem = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitItem = () => {
    const { currentUser } = this.props;
    if (currentUser === null) {
      alert('Please log in or register to add items');
      return;
    }

    if (!this.state.name) {
      alert('You must enter a name for your item listing');
      return;
    }

    if (!this.state.name) {
      alert('You must specify a price for your item listing');
      return;
    }

    const newItem = { ...this.state };
    newItem.seller = {
      id: currentUser.id,
      username: currentUser.username,
      image: currentUser.image || '',
      email: currentUser.email,
    };

    this.props.onSubmit(newItem);
    this.setState({ name: '', price: '', image: '' });
  }

  render() {
    return (
      <div className="card" style={{ marginBottom: 0 }}>
        <div className="content" style={{ padding: '5px 10px 20px 10px' }}>
          <div className="footer">
            <h3 style={{ marginTop: 0 }}>Add Item</h3>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              style={localStyle.nameField}
              placeholder="Item Name"
              onChange={this.updateItem}
            />
            <input
              type="text"
              name="price"
              className="form-control"
              style={localStyle.priceField}
              value={this.state.price}
              placeholder="Price"
              onChange={this.updateItem}
            />
            { (this.state.image)
              ? <small><i>Uploaded your image to S3</i></small>
              : <small><i>No Image specified</i></small>
            }

            <hr />
            <div className="stats">
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
    );
  }
}

const localStyle = {
  nameField: {
    marginBottom: 12,
    border: '1px solid #ddd',
  },
  priceField: {
    border: '1px solid #ddd',
  },
};

export default AddItem;
