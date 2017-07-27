import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Danh Mục</h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>

                  <div className="x_content">
                    <div className="table-responsive">
                      <table className="table table-striped jambo_table bulk_action">
                        <thead>
                          <tr className="headings">
                            <th>
                              <input type="checkbox" id="check-all" className="flat" />
                            </th>
                            <th className="column-title">Invoice </th>
                            <th className="column-title">Invoice Date </th>
                            <th className="column-title">Order </th>
                            <th className="column-title">Bill to Name </th>
                            <th className="column-title">Status </th>
                            <th className="column-title">Amount </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="even pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records" />
                            </td>
                            <td className=" ">121000040</td>
                            <td className=" ">May 23, 2014 11:47:56 PM </td>
                            <td className=" ">121000210 <i className="success fa fa-long-arrow-up"></i></td>
                            <td className=" ">John Blank L</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$7.45</td>
                          </tr>
                          <tr className="odd pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records" />
                            </td>
                            <td className=" ">121000039</td>
                            <td className=" ">May 23, 2014 11:30:12 PM</td>
                            <td className=" ">121000208 <i className="success fa fa-long-arrow-up"></i>
                            </td>
                            <td className=" ">John Blank L</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$741.20</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
      </div>
    );
  }
}

export default App;
