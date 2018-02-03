import React from 'react';

const Item = () => (
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
              <p>Capacity</p>
                        105GB
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
