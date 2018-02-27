import React from 'react';

const Item = ({
  item: {
    id, name, price, image, seller,
  },
  onPurchase,
  onRemove,
  isMine,
}) => (
  <div className="col-xl-3 col-lg-4 col-sm-6">
    <div className="card" style={localStyle.card}>
      <div className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="numbers">
              { isMine && (
                <button
                  onClick={() => onRemove(id)}
                  className="btn btn-danger"
                  style={localStyle.deleteButton}
                >X
                </button>
              )}
              <p>{name}</p>
              ${price}
            </div>
          </div>
          <div
            className="col-xs-12"
            style={localStyle.imageContainer}
          >
            <a href="/" onClick={onPurchase}>
              {image ? (
                <img
                  style={localStyle.itemImage}
                  src={image}
                  alt="item"
                />
              ) : (
                <React.Fragment>
                  <br /><br />
                  <h3 style={{ textAlign: 'center' }}>
                    No Image Provided
                  </h3>
                  <br /><br />
                  <h5 style={{ textAlign: 'center' }}>
                    Click to Email {seller.username}
                  </h5>
                </React.Fragment>
              )}
            </a>
          </div>
        </div>

        <div className="footer">
          <hr />
          {/* <img
            src={seller.image}
            style={localStyle.avatar}
            alt="seller"
          /> */}
          <div className="stats">
            {seller.username} {isMine ? '(you)' : ''}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const localStyle = {
  card: {
    height: 385,
  },
  avatar: {
    width: 32,
    borderRadius: 16,
    float: 'right',
  },
  itemImage: {
    width: '100%',
    maxHeight: 256.5,
    padding: 4,
    border: '1px solid #ddd',
    background: '#f9f9f9',
  },
  imageContainer: {
    minHeight: 257,
  },
  deleteButton: {
    float: 'left',
    padding: '2px 12px',
    fontSize: 20,
  },
};

export default Item;
