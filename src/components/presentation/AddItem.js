import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class AddItem extends Component {
  state = {
    item: {},
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
              style={localStyle.nameField}
              placeholder="Item Name"
              onChange={this.updateItem}
            />
            <input
              type="text"
              name="price"
              className="form-control"
              style={localStyle.priceField}
              placeholder="Price"
              onChange={this.updateItem}
            />
            <small><i>No Image specified</i></small>
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
  textarea: {
    border: '1px solid #ddd',
    height: 160,
    marginBottom: 16,
  },
};

export default AddItem;
