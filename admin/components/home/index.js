import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    return (
      <div className="row top_tiles">
          <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="tile-stats">
              <div className="icon"><i className="fa fa-caret-square-o-right"></i></div>
              <div className="count">179</div>
              <h3>New Sign ups</h3>
            </div>
          </div>
          <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="tile-stats">
              <div className="icon"><i className="fa fa-comments-o"></i></div>
              <div className="count">179</div>
              <h3>New Sign ups</h3>
            </div>
          </div>
          <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="tile-stats">
              <div className="icon"><i className="fa fa-sort-amount-desc"></i></div>
              <div className="count">179</div>
              <h3>New Sign ups</h3>
            </div>
          </div>
          <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="tile-stats">
              <div className="icon"><i className="fa fa-check-square-o"></i></div>
              <div className="count">179</div>
              <h3>New Sign ups</h3>
            </div>
          </div>
        </div>
    );
  }
}
