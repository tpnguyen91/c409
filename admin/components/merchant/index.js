import React, { Component } from 'react';
import superagent from 'superagent';
import { withRouter, Link } from 'react-router';
import ReactPaginate from 'react-paginate';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import './styles.css'

var Spinner = require('react-spinkit');


class Merchant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 5,
      current: 0,
      agencies: [],
      id: '',
      isShowLoading: false,
    };

    this.onPageChange = this.onPageChange.bind(this);
    this.onGoToEditPage = this.onGoToEditPage.bind(this);
  }

   alertDialog(id) {
    confirmAlert({
      title: 'Xác nhận',                        // Title dialog
      message: 'Bạn có mún xoá Đại lý này?',               // Message dialog
      childrenElement: () => <div></div>,       // Custom UI or Component
      confirmLabel: 'Đồng ý',                           // Text button confirm
      cancelLabel: 'Huỷ',                             // Text button cancel
      onConfirm: () => this.onRemove(id),    // Action after Confirm
      onCancel: () => console.log('Action after Cancel'),      // Action after Cancel
    })
  };

  componentWillMount() {
    this.fetchList();
  }

  fetchList() {
    const { limit } = this.state;
     this.setState({
      isShowLoading: true,
    })
    superagent
      .get('/api/v1/agency')
      .end((err, res) => {
        this.setState({
          isShowLoading: false,
        })
        const agencies = (res.body || {}).agencies || [];
        const page = Math.ceil(agencies.length / limit);
        this.setState({ agencies, page });
      })
    }

  onRemove(id) {
    this.setState({
      isShowLoading: true,
    });
    superagent
    .delete('/api/v1/agency/' + id)
    .end((err, res) => {
      this.setState({
        isShowLoading: false,
      });
      if(!err) {
       this.fetchList();
      }
    });
  }

  onGoToEditPage() {
    this.props.router.push('/dai-ly/cap-nhat');
  }

  onPageChange({selected: current}) {
    this.setState({ current });
  }

  renderBtnAddNew() {
    const urlEdit = '/dai-ly/' + this.state.id;
    return (
      <div>
        <a className="btn btn-success customBtnAddNew" href='/dai-ly/tao-moi'>Tạo mới</a>
      </div>
    );
  }

  renderListAgencis() {
    const { agencies = [], limit, current = 0 } = this.state;
    const newAgencies = [...agencies].splice(current * limit, limit);

    return (
      <table className="table table-striped jambo_table bulk_action">
        <thead>
          <tr className="headings">
            <th>
              <input type="checkbox" id="check-all" className="flat" />
            </th>
            <th className="column-title">Tên Đại Lý </th>
            <th className="column-title">Điện Thoại </th>
            <th className="column-title">Email</th>
            <th className="column-title">Địa Chỉ </th>
            <th className="column-title"></th>
          </tr>
        </thead>
        <tbody>
          {newAgencies.map(({ _id: id, name, address, phone, email }) => (
            <tr className="even pointer" key={id}>
              <td className="a-center " style={{ verticalAlign: 'middle' }} >
                <input type="checkbox" className="flat" name="table_records" value={id} />
              </td>
              <td className=" ">{name}</td>
              <td className=" ">{phone}</td>
              <td className=" ">{email}</td>
              <td className=" ">{address}</td>
              <td className=" ">
                <a className="btn btn-app" title="Nhập số đã bán" style={{ minWidth: 50, height: 50 }} href={`/dai-ly/${id}/nhap-du-lieu`}><i className="fa fa-file-excel-o"></i></a>
                <a className="btn btn-app" style={{ minWidth: 50, height: 50 }} href={`/dai-ly/${id}`}><i className="fa fa-pencil-square"></i></a>
                <a className="btn btn-app" style={{ minWidth: 50, height: 50 }} onClick={() => this.alertDialog(id)} ><i className="fa fa-close"></i></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  renderPaginate() {
    const { page, current } = this.state;
    if (page === 0) return null;

    return (
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={<span>...</span>}
        pageCount={page}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        initialPage={current}
        onPageChange={this.onPageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages paginate_button"}
        activeClassName={"active"}
      />
    );
  }

  overLoading() {
    return (
      <div className='overlay'>
        <Spinner name="ball-grid-pulse" color="orange"/>
      </div>
    );
  }


  render() {
    const { isShowLoading } = this.state;
    return (
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Danh Sách Đại Lý</h2>
                <div className="clearfix"></div>
              </div>
              <div>
              </div>
              {this.renderBtnAddNew()}
              <div className="x_content">
                <div className="table-responsive">
                  {this.renderListAgencis()}
                </div>
              </div>
              <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                {this.renderPaginate()}
              </div>
            </div>
          </div>
          { isShowLoading? this.overLoading() : null}
        </div>
    );
  }
}

export default withRouter(Merchant)
