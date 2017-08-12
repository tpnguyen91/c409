import React, { Component } from 'react';
import moment from 'moment';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import superagent from 'superagent';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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
      number: '',
      isOpen: false,
      resultLottery: {},
      modalIsOpen: false
   };
  this.handleChange = this.handleChange.bind(this);
  this.onChangeDate = this.onChangeDate.bind(this);
  this.toggleCalendar = this.toggleCalendar.bind(this);
  this.onClickCheckResult = this.onClickCheckResult.bind(this);
  this.onChangeNumber = this.onChangeNumber.bind(this);

  this.openModal = this.openModal.bind(this);
  this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
 }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed. 
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 

  componentWillMount() {
    this.updateValueDaiDuThuong();
    this.fetchDataResultLottery();
  }

  fetchDataResultLottery() {
    const { current } = this.state;
    const urlDate = current.format('DD-MM-YYYY');
    superagent
    .get(`/api/v1/crawler/11-08-2017`)
    .end((err, res) => {
      const arr = (res.body || {}).result || [];
      if (arr.length > 0) {
        arr.forEach(item => {
          if (item.date.trim() === '11/08/2017') {
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

  checkTypeTwoNumber() {
    const { resultLottery, number, typeNumber, typeBlock  } = this.state;
    if (typeBlock === 'DAU') {
      if (resultLottery.giai8 === number) return 'giai8';
      return '';
    } 
    if (typeBlock === 'CUOI') {
      if (resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber) === number) return 'giaidb';
      return '';
    }
    if (typeBlock === 'DAU/CUOI') {
      const award = [];
      if (resultLottery.giai8 === number) {
        award.push('giai8');
      } 
      if (resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber) === number) {
        award.push('giaidb');
      } 
      return award.join('-');
    }
    if (typeBlock === '18LO') {
      const award = [];
      for (var i = 0; i < 9; i++) {
        let nameAward = i === 0 ? 'giaidb' : `giai${i}`
        let value = resultLottery[nameAward];
        if (nameAward === 'giai6' || nameAward === 'giai4' || nameAward === 'giai3') {
          const arr = value.split('-');
          let flag = false;
          arr.forEach(item => {
            if (item.substr(item.length - typeNumber) === number) {
              flag = true;
            }
          });
          if (flag) { award.push(nameAward); }
        }else if (value.substr(value.length - typeNumber) === number) {
          award.push(nameAward);
        }
      }
      return award.join('-');
    }
  }

  checkTypeThreeNumber() {
    const { resultLottery, number, typeNumber, typeBlock } = this.state;
    if (typeBlock === 'DAU') {
      if (resultLottery.giai7 === number) return 'giai7';
      return '';
    } 
    if (typeBlock === 'CUOI') {
      if (resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber) === number) return 'giaidb';
      return '';
    }
    if (typeBlock === 'DAU/CUOI') {
      const award = [];
      if (resultLottery.giai7 === number) {
        award.push('giai7');
      } 
      if (resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber) === number) {
        award.push('giaidb');
      } 
      return award.join('-');
    }
    if (typeBlock === '7LO') {
      let value = resultLottery['giai4'];
      const arr = value.split('-');
      let flag = false;
      arr.forEach(item => {
        if (item.substr(item.length - typeNumber) === number) {
          flag = true;
        }
      });
      return flag ? 'giai4': '';
    }
    if (typeBlock === '17LO') {
      const award = [];
      for (var i = 0; i < 8; i++) {
        let nameAward = i === 0 ? 'giaidb' : `giai${i}`
        let value = resultLottery[nameAward];
        if (nameAward === 'giai6' || nameAward === 'giai4' || nameAward === 'giai3') {
          const arr = value.split('-');
          let flag = false;
          arr.forEach(item => {
            if (item.substr(item.length - typeNumber) === number) {
              flag = true;
            }
          });
          if (flag) { award.push(nameAward); }
        }else if (value.substr(value.length - typeNumber) === number) {
          award.push(nameAward);
        }
      }
      return award.join('-');
    }
  }
  
  checkTypeFourNumber() {
    const { resultLottery, number, typeNumber, typeBlock } = this.state;
    if (typeBlock === '4LO') {
      const award = [];
      let value = resultLottery['giai6'];
      const arr = value.split('-');
      let flag = false;
      arr.forEach(item => {
        if (item.substr(item.length - typeNumber) === number) {
          flag = true;
        }
      });
      if (flag) { award.push('giai6');}

      value = resultLottery['giai5'];
      if (value.substr(value.length - typeNumber) === number) {
        award.push('giai5');
      }
    return award.join('-');
    }
    if (typeBlock === '16LO') {
      const award = [];
      for (var i = 0; i < 7; i++) {
        let nameAward = i === 0 ? 'giaidb' : `giai${i}`
        let value = resultLottery[nameAward];
        if (nameAward === 'giai6' || nameAward === 'giai4' || nameAward === 'giai3') {
          const arr = value.split('-');
          let flag = false;
          arr.forEach(item => {
            if (item.substr(item.length - typeNumber) === number) {
              flag = true;
            }
          });
          if (flag) { award.push(nameAward);}
        }else if (value.substr(value.length - typeNumber) === number) {
          award.push(nameAward);
        }
      }
      return award.join('-');
    }
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

  onChangeNumber(e) {
    const { name, value } = e.target;
    if (name === 'number') {
      this.setState({ number: value });
    }
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }

  onClickCheckResult() {
    const { typeNumber } = this.state;
    if (typeNumber === 2) {
      console.log(this.checkTypeTwoNumber());
    }
    if (typeNumber === 3) {
      console.log(this.checkTypeThreeNumber());
    }
    if (typeNumber === 4) {
      console.log(this.checkTypeFourNumber());
    }
    this.openModal();
  }


  renderKQLoTo() {
    return (
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div className="divTitle"><span>KẾT QUẢ XỔ SỐ MIỀN NAM - 11/08/2017</span>
            </div>
              <table className="kqxs" width="100%">
                <tr id="kqxs">
                  <td>G8</td>
                  <td><div>86</div></td>
                  <td><div>73</div></td>
                  <td><div>36</div></td>
                </tr>
            </table>
          </div>
      </Modal>
    );
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
                    <input 
                      className="form-control inputSeri" 
                      name='number' 
                      value={this.state.number} 
                      onChange={this.onChangeNumber}
                      placeholder="Nhập số" />
                  </div>
                <button 
                  type="button" 
                  onClick={this.onClickCheckResult}
                  className="btn btn-secondary marginTop">Xem Kết Quả</button>
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
          {this.renderKQLoTo()}
          {this.renderTraCuuLoto()}
          {this.renderItem()}
          <div className='divAds' />
          <div className='divAds' />
      </div>
    );
  }
}

export default LeftColumn;
