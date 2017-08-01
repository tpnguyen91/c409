import React, { Component } from 'react';
import superagent from 'superagent';
import ReactPaginate from 'react-paginate';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import
import './styles.css'

export default class News extends Component {

  constructor(props) {
    super(props);

    this.state = {
      limit: 5,
      current: 0,
      news: [],
      id: '',
      isShowLoading: false,
    };

    this.onPageChange = this.onPageChange.bind(this);
    this.onGoToEditPage = this.onGoToEditPage.bind(this);
  }

  componentWillMount() {
    this.fetchList();
  }

  fetchList() {
    const { limit } = this.state;
    superagent
      .get('/api/v1/news')
      .end((err, res) => {
        console.log(res);
        const news = (res.body || {}).news || [];
        const page = Math.ceil(news.length / limit);
        this.setState({ news, page });
      })
    }


  onPageChange({selected: current}) {
    this.setState({ current });
  }

  renderBtnAddNew() {
    const urlEdit = '/dai-ly/' + this.state.id;
    return (
      <div>
        <a className="btn btn-success btn-lg customBtnAddNew" href='/dai-ly/tao-moi'>Tạo mới</a>
      </div>
    );
  }

  renderListNews() {
    const { news = [], limit, current = 0 } = this.state;
    const newNews = [...news].splice(current * limit, limit);

    return (
      <table className="table table-striped jambo_table bulk_action">
        <thead>
          <tr className="headings">
            <th>
              <input type="checkbox" id="check-all" className="flat" />
            </th>
            <th className="column-title">Tiêu đề </th>
            <th className="column-title">Ngày tạo </th>
            <th className="column-title"></th>
          </tr>
        </thead>
        <tbody>
          {newNews.map(({ _id: id, title, content }) => (
            <tr className="even pointer" key={id}>
              <td className="a-center " style={{ verticalAlign: 'middle' }} >
                <input type="checkbox" className="flat" name="table_records" value={id} />
              </td>
              <td className=" " style={{ verticalAlign: 'middle' }}>{title}</td>
              <td className=" " style={{ verticalAlign: 'middle' }}>{content}</td>
              <td>
                <a className="btn btn-app" style={{ minWidth: 50, height: 50 }} href={'/dai-ly/' + id}><i className="fa fa-pencil-square"></i></a>
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

  render() {
    return (
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Quản Lý Tin Tức</h2>
                <div className="clearfix"></div>
              </div>
              <div>
              </div>
              {this.renderBtnAddNew()}
              <div className="x_content">
                <div className="table-responsive">
                  {this.renderListNews()}
                </div>
              </div>
              <div>
                  <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                   {this.renderPaginate()}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
