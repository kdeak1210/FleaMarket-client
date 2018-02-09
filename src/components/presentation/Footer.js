import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <nav className="pull-left">
        <ul>
          <li>
            <a
              href="https://github.com/kdeak1210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-2x fa-github" /> ~ Kyle Deak
            </a>
          </li>
          <li>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Portfolio Site
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright pull-right">
        Paper Dashboard Theme by <a href="http://www.creative-tim.com">Creative Tim</a>
      </div>
    </div>
  </footer>
);

export default Footer;
