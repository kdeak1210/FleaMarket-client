import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import axios from 'axios';

import { APIManager } from '../../utils';
import { Item } from '../presentation';
import actions from '../../actions';

class SearchResults extends Component {
  state = {
    item: { },
  }

  updateItem = (e) => {
    const updatedItem = { ...this.state.item };
    updatedItem[e.target.name] = e.target.value;
    this.setState({ item: updatedItem });
  }

  submitItem = () => {
    // console.log(`Item: ${JSON.stringify(this.state.item)}`);
    // console.log(`Location: ${JSON.stringify(this.props.map.currentLocation)}`);
    const newItem = { ...this.state.item };
    newItem.id = this.props.item.all.length + 1;
    newItem.position = this.props.map.currentLocation;
    this.props.addItem(newItem);
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
        const signedUrl = response.result;

        const options = {
          headers: {
            'Content-Type': file.type,
          },
        };

        return axios.put(signedUrl, file, options);
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { all } = this.props.item || [];

    return (
      <div className="container-fluid">

        <div className="row">
          { all.map((item, i) => (
            <Item key={item.id} item={item} />
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
      </div>
    );
  }
}

const localStyle = {
  inputField: {
    marginBottom: 12,
    border: '1px solid #ddd',
  },
};

const stateToProps = state => ({
  account: state.account,
  item: state.item,
  map: state.map,
});

const dispatchToProps = dispatch => ({
  addItem: item => dispatch(actions.addItem(item)),
  checkCurrentUser: params => dispatch(actions.checkCurrentUser(params)),
});

export default connect(stateToProps, dispatchToProps)(SearchResults);
