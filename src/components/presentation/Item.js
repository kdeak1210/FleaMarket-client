import React from 'react';

const Item = ({
  item: {
    name, price, image, seller,
  },
  onPurchase,
}) => (
  // id: 1, key: 1, defaultAnimation: 2, label: 'Television', position: { lat: 38.903, lng: -77.043 },
  <div className="col-lg-3 col-sm-6">
    <div className="card" style={localStyle.card}>
      <div className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="numbers">
              <p>{name}</p>
              ${price}
            </div>
          </div>
          <div
            className="col-xs-12"
            style={localStyle.imageContainer}
          >
            <a href="/" onClick={onPurchase}>
              <img
                style={localStyle.itemImage}
                src={image}
                alt="item"
              />
            </a>
          </div>
        </div>

        <div className="footer">
          <hr />
          <img
            src={seller.image}
            style={localStyle.avatar}
            alt="seller"
          />
          <div className="stats">
            {seller.username}
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
};

export default Item;
