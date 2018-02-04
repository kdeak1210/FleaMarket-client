import React from 'react';

const Item = ({
  item: {
    id, key, label, price,
  },
}) => (
  // id: 1, key: 1, defaultAnimation: 2, label: 'Television', position: { lat: 38.903, lng: -77.043 },
  <div className="col-lg-3 col-sm-6">
    <div className="card">
      <div className="content">
        <div className="row">
          <div className="col-xs-5">
            <div className="icon-big icon-warning text-center">
              <i className="ti-server" />
            </div>
          </div>
          <div className="col-xs-7">
            <div className="numbers">
              <p>{label}</p>
              ${price}
            </div>
          </div>
        </div>
        <div className="footer">
          <hr />
          <div className="stats">
            <i className="ti-reload" /> Updated now
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Item;
