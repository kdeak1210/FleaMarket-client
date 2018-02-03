import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    console.log('hello');
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar" data-background-color="white" data-active-color="danger">

          <div className="sidebar-wrapper">
            MAP GOES HERE
          </div>
        </div>

        <div className="main-panel">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar bar1" />
                  <span className="icon-bar bar2" />
                  <span className="icon-bar bar3" />
                </button>
                <a className="navbar-brand" href="#">Dashboard</a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="ti-panel" />
                      <p>Stats</p>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="ti-bell" />
                      <p className="notification">5</p>
                      <p>Notifications</p>
                      <b className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Notification 1</a></li>
                      <li><a href="#">Notification 2</a></li>
                      <li><a href="#">Notification 3</a></li>
                      <li><a href="#">Notification 4</a></li>
                      <li><a href="#">Another notification</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-settings" />
                      <p>Settings</p>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </nav>


          <div className="content">
            <div className="container-fluid">
              <div className="row">
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
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="content">
                      <div className="row">
                        <div className="col-xs-5">
                          <div className="icon-big icon-success text-center">
                            <i className="ti-wallet" />
                          </div>
                        </div>
                        <div className="col-xs-7">
                          <div className="numbers">
                            <p>Revenue</p>
                                        $1,345
                          </div>
                        </div>
                      </div>
                      <div className="footer">
                        <hr />
                        <div className="stats">
                          <i className="ti-calendar" /> Last day
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="content">
                      <div className="row">
                        <div className="col-xs-5">
                          <div className="icon-big icon-danger text-center">
                            <i className="ti-pulse" />
                          </div>
                        </div>
                        <div className="col-xs-7">
                          <div className="numbers">
                            <p>Errors</p>
                                        23
                          </div>
                        </div>
                      </div>
                      <div className="footer">
                        <hr />
                        <div className="stats">
                          <i className="ti-timer" /> In the last hour
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="content">
                      <div className="row">
                        <div className="col-xs-5">
                          <div className="icon-big icon-info text-center">
                            <i className="ti-twitter-alt" />
                          </div>
                        </div>
                        <div className="col-xs-7">
                          <div className="numbers">
                            <p>Followers</p>
                                        +45
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
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <nav className="pull-left">
                <ul>
                  <li>
                    <a href="http://www.creative-tim.com">
                            Creative Tim
                    </a>
                  </li>
                  <li>
                    <a href="http://blog.creative-tim.com">
                           Blog
                    </a>
                  </li>
                  <li>
                    <a href="http://www.creative-tim.com/license">
                            Licenses
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="copyright pull-right">
                &copy; <script>document.write(new Date().getFullYear())</script>, made with <i className="fa fa-heart heart" /> by <a href="http://www.creative-tim.com">Creative Tim</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
