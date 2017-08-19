import React, { Component } from 'react';
import './styles.css'

export default class CommonInsert extends Component {

  render() {
    return (
      <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Form Design</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">
                  <br />
                  <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">First Name <span className="required">*</span>
                      </label>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" id="first-name" required="required" className="form-control col-md-7 col-xs-12" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Last Name <span className="required">*</span>
                      </label>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" id="last-name" name="last-name" required="required" className="form-control col-md-7 col-xs-12" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="middle-name" className="control-label col-md-3 col-sm-3 col-xs-12">Middle Name / Initial</label>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input id="middle-name" className="form-control col-md-7 col-xs-12" type="text" name="middle-name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Gender</label>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div id="gender" className="btn-group" data-toggle="buttons">
                          <label className="btn btn-default" data-toggle-className="btn-primary" data-toggle-passive-className="btn-default">
                            <input type="radio" name="gender" value="male" /> &nbsp; Male &nbsp;
                          </label>
                          <label className="btn btn-primary" data-toggle-className="btn-primary" data-toggle-passive-className="btn-default">
                            <input type="radio" name="gender" value="female" /> Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Date Of Birth <span className="required">*</span>
                      </label>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input id="birthday" className="date-picker form-control col-md-7 col-xs-12" required="required" type="text" />
                      </div>
                    </div>
                    <div className="ln_solid"></div>
                    <div className="form-group">
                      <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                        <button className="btn btn-primary" type="button">Cancel</button>
                        <button className="btn btn-primary" type="reset">Reset</button>
                        <button type="submit" className="btn btn-success">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    );
  }
}
