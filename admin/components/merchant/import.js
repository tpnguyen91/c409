import React, { Component } from 'react';
import superagent from 'superagent';
import { withRouter } from 'react-router';
import XLSX from 'xlsx';

import './styles.css'

class Import extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agency: {},
      name: null,
      dataSource: [],
    };
    this.onChange = this.onChange.bind(this);
    this.renderDataImport = this.renderDataImport.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    superagent
      .post('/api/v1/agency')
      .send({ agency: this.state.agency })
      .end((err, res) => {
        if (!err) this.props.router.push('/dai-ly')
      })
  }

  onFixdata(data) {
    var o = "", l = 0, w = 10240;
    for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
    o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
    return o;
  }

  onChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = file.name;
    const reader = new FileReader();

    reader.onload = (rs) => {
      const workbook = XLSX.read(rs.target.result, {type: 'binary'});
      const dataSource = Object.entries(workbook.Sheets).map(([name, ws]) => ({ name, dataSource: XLSX.utils.sheet_to_json(ws, { header: "A" }) }));
      this.setState({ fileName, dataSource });
    }

    reader.readAsBinaryString(file);
  }

  renderDataImport({ dataSource }, tab) {
    if (dataSource.length === 0) return null;
    const fileds = Object.keys(dataSource[0]);

    return (
      <div id={`sheet-number-${tab}`} className={`tab-pane ${tab === 0 ? 'fade in active' : 'fade'}`} key={tab}>
        <table className="table table-striped jambo_table bulk_action preview-import-table">
          <thead>
            <tr className="headings">
              {fileds.map((key) => <th key={key} className="column-title">{key}</th>)}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item, index) => (
              <tr className="even pointer" key={index}>
                {fileds.map((key) => <th key={key} className="column-title">{item[key]}</th>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  get renderDataImports() {
    const { dataSource } = this.state;
    if (dataSource.length === 0) return null;

    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_content">
            <ul className="nav nav-tabs" key="header">
              {dataSource.map(({ name }, index) => <li className={index === 0 && 'active'} key={index}><a data-toggle="tab" href={`#sheet-number-${index}`}>{name}</a></li>)}
            </ul>
            <div className="tab-content" key="content">
              {dataSource.map(this.renderDataImport)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>Nhâp các số đã bán</h2>
              <div className="clearfix"></div>
            </div>
            <div className="x_content">
              <br />
              <form
                data-parsley-validate
                onSubmit={this.onSubmit}
                className="form-horizontal form-label-left"
              >
                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="start-line">Dòng bắt đầu<span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <input defaultValue="1" name="start" id="start-line" required className="form-control col-md-7 col-xs-12" onChange={this.onChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="file-data">Chọn file <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <input type="file" id="file-data" required className="form-control col-md-7 col-xs-12" onChange={this.onChange}/>
                  </div>
                </div>
                <div className="ln_solid"></div>
                <div className="form-group">
                  <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                    <button className="btn btn-primary" type="reset">Làm mới</button>
                    <button type="submit" className="btn btn-success">Lưu lại</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {this.renderDataImports}
      </div>
    );
  }
}

export default withRouter(Import);
