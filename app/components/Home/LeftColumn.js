import React, { Component } from 'react';
import moment from 'moment';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import superagent from 'superagent';

const listNhaPhatHanh = [
  { value: 'BT', label: 'Bình Thuận' },
  { value: 'DN', label: 'Đồng Nai' },
];

const ListDaiDongNai = [
  'Tiền Giang', 'TP Hồ Chí Minh', 'Vũng Tàu', 'Đồng Nai', 'Tây Ninh', 'Bình Dương', 'TP Hồ Chí Minh'
];

const ListDaiBinhThuan = [
  'Lâm Đồng', 'Đồng Tháp', 'Vũng Tàu', 'Sóc Trăng', 'Bình Thuận', 'Bình Dương', 'Bình Phước'
];

const listBlocks = {
  2: [
    { value: '', label: 'Chọn Lô' },
    { value: 'DAU', label: 'Đầu' },
    { value: 'CUOI', label: 'Cuối' },
    { value: 'DAU/CUOI', label: 'Đầu/Cuối' },
    { value: '18LO', label: '18 Lô' },
  ],
  3: [
    { value: '', label: 'Chọn Lô' },
    { value: 'DAU', label: 'Đầu' },
    { value: 'CUOI', label: 'Cuối' },
    { value: 'DAU/CUOI', label: 'Đầu/Cuối' },
    { value: '7LO', label: '7 Lô' },
    { value: '17LO', label: '17 Lô' },
  ],
  4: [
    { value: '', label: 'Chọn Lô' },
    { value: '4LO', label: '4 Lô' },
    { value: '16LO', label: '16 Lô' },
  ],
}

const listLoaiSo = [
  { value: 2, label: '2 Số' },
  { value: 3, label: '3 Số' },
  { value: 4, label: '4 Số' },
];

const listSeeds =[
  { name: 'TP Hồ Chí Minh', dayResult: '1,6' },
  { name: 'Bình Dương', dayResult: '5' },
  { name: 'Trà Vinh', dayResult: '5' },
  { name: 'Vĩnh Long', dayResult: '5' },
  { name: 'Cà Mau', dayResult: '1' },
  { name: 'Đồng Tháp', dayResult: '1' },
  { name: 'Bạc Liêu', dayResult: '2' },
  { name: 'Bến Tre', dayResult: '2' },
  { name: 'Vũng Tàu', dayResult: '2' },
  { name: 'Cần Thơ', dayResult: '3' },
  { name: 'Đồng Nai', dayResult: '3' },
  { name: 'Sóc Trăng', dayResult: '3' },
  { name: 'An Giang', dayResult: '4' },
  { name: 'Bình Thuận', dayResult: '4' },
  { name: 'Tây Ninh', dayResult: '4' },
  { name: 'Bình Phước', dayResult: '6' },
  { name: 'Hậu Giang', dayResult: '6' },
  { name: 'Long An', dayResult: '6' },
  { name: 'Đà Lạt', dayResult: '0' },
  { name: 'Kiên Giang', dayResult: '0' },
  { name: 'Tiền Giang', dayResult: '0' },
];

class LeftColumn extends Component {

  constructor (props) {
   super(props)
   this.state = {
      value: new Date().toISOString(),
      valueNPH: 'BT',
      valueDaiDuThuong: '',
      current: moment(),
      typeNumber: 2,
      typeBlock: '',
      listBlock: listBlocks[2],
      isOpen: false,
      resultLottery: {},
   };
   this.handleChange = this.handleChange.bind(this);
   this.onChangeDate = this.onChangeDate.bind(this);
   this.toggleCalendar = this.toggleCalendar.bind(this);
 }

  componentWillMount() {
    this.updateValueDaiDuThuong();
    this.fetchDataResultLottery();
  }

  fetchDataResultLottery() {
    const { current } = this.state;
    const urlDate = current.format('DD-MM-YYYY');
    superagent
    .get(`/api/v1/crawler/${urlDate}`)
    .end((err, res) => {
      const arr = (res.body || {}).result || [];
      if (arr.length > 0) {
        arr.forEach(item => {
          if (item.date.trim() === current.format('DD/MM/YYYY')) {
            item.data.forEach(v => {
              if (v.code.includes('XSBD')) {
                this.setState({ resultLottery: v });
                console.log(v);
              }
            })
            return;
          }
        })
      }
    })
  }

  
  updateValueDaiDuThuong() {
    const { valueNPH, current } = this.state;
    const indexDay = current.day();
    if (valueNPH === 'BT') {
      this.setState({ valueDaiDuThuong: ListDaiBinhThuan[indexDay] });
    }else {   
      this.setState({ valueDaiDuThuong: ListDaiDongNai[indexDay] });
    }
  }

  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    });
  }

  onChangeNPH(val) {
    this.setState({ valueNPH: val.value }, () => {
      this.updateValueDaiDuThuong();
    });
  }

  onChangeDate(current) {
    this.setState({
      current,
      isOpen: !this.state.isOpen
    }, () => {
      this.updateValueDaiDuThuong();
    });
  }

  onChangLoaiLo(val) {
    this.setState({
      typeBlock: val.value,
    });
  }

  onChangLoaiSo(val) {
    this.setState({
      typeNumber: val.value,
      typeBlock: '',
      listBlock: listBlocks[val.value],
    });
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }

  renderTraCuuLoto() {
    return (
      <div class="col-md-3">
							<div className="panel-group panel-group-sm" id="accordion">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1One">
                        Kết quả Lô tô
											</a>
										</h4>
									</div>
									<div id="" className="accordion-body collapse in">
  						<div className="panel-body">
                <form className="form-group wrapper">
                  <div className='form-group'>
                    <Select
                      value={this.state.valueNPH}
                      clearable={false}
                      options={listNhaPhatHanh}
                      onChange={(val) => this.onChangeNPH(val)}
                    />
                  </div>
                  <div className='form-group'>
                      <button
                        type="button"
                        className="btn btn-default btnAwardL"
                        onClick={this.toggleCalendar}>
                        {this.state.current.format("DD-MM-YYYY")}
                      </button>
                      <button
                        type="button"
                        style={{ fontSize: 12 }}
                        className="btn btn-info btnAwardR">
                        {this.state.valueDaiDuThuong}
                      </button>
                      {
                        this.state.isOpen && (
                          <DatePicker
                              selected={this.state.current}
                              onChange={this.onChangeDate}
                              withPortal
                              inline />
                        )
                      }
                  </div>
                  <div className='form-group' style={{ display: 'flex' }}>
                   <div className="btnAwardL">
                    <Select
                      value={this.state.typeNumber}
                      clearable={false}
                      options={listLoaiSo}
                      onChange={(val) => this.onChangLoaiSo(val)}
                    />
                  </div>
                  <div className="btnAwardR">
                    <Select
                      value={this.state.typeBlock}
                      clearable={false}
                      options={this.state.listBlock}
                      onChange={(val) => this.onChangLoaiLo(val)}
                    />
                  </div>
                  </div>
                  <div className='form-group'>
                    <input className="form-control inputSeri" placeholder="Nhập số" id="pwd" />
                  </div>
                <button type="button" className="btn btn-secondary marginTop">Xem Kết Quả</button>
                </form>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
    );
  }

  renderItem() {
    let d = new Date();
    let n = d.getDay();
    return (
      <div class="col-md-3">
							<div className="panel-group panel-group-sm" id="accordion">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a className="accordion-toggle" href="/kqxs">
												Kết quả xổ số Miền Nam
											</a>
										</h4>
									</div>
									<div id="collapse1One" className="accordion-body collapse in">
										<div className="panel-body">
                      <ul className="nav nav-list narrow">
                        {
                            listSeeds.map(item => {
                              return (
                                <li>
                                <a
                                  href="#tabsNavigation1"
                                  data-toggle="tab"
                                  style={{ fontSize: 12 }}
                                >
                                  {item.name}
                                  {
                                    item.dayResult.split(',').includes(n.toString()) ?
                                    <span
                                      style={{ marginLeft: 5, fontSize: 10, color: '#0088cc' }}
                                      className="glyphicon glyphicon-refresh glyphicon-refresh-animate">
                                    </span>
                                    : null
                                  }
                                </a>
                              </li>
                              );
                            })
                        }
                      </ul>
										</div>
									</div>
								</div>
							</div>
						</div>
    );
  }

  render() {
    return (
      <div className="col-md-3" >
          {this.renderTraCuuLoto()}
          {this.renderItem()}
          <div className='divAds' />
          <div className='divAds' />
      </div>
    );
  }
}

export default LeftColumn;
