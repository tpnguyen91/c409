import React, { Component } from 'react';
import moment from 'moment';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import superagent from 'superagent';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import NumericInput from 'react-numeric-input';
import AlertContainer from 'react-alert'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

const listNhaPhatHanh = [
  { value: 'BT', label: 'Bình Thuận' },
  { value: 'DN', label: 'Đồng Nai' },
];

const ListDaiDongNai = [
  {code: 'XSTG', name:  'Tiền Giang'},
  {code: 'XSHCM', name: 'TP Hồ Chí Minh'},
  {code: 'XSVT', name: 'Vũng Tàu'},
  {code: 'XSDN', name: 'Đồng Nai'},
  {code: 'XSTN', name: 'Tây Ninh'},
  {code: 'XSBD', name: 'Bình Dương'},
  {code: 'XSHCM', name: 'TP Hồ Chí Minh'},
];

const ListDaiBinhThuan = [
  {code: 'XSDL', name: 'Đà Lạt'}, 
  {code: 'XSDT', name: 'Đồng Tháp'}, 
  {code: 'XSVT', name: 'Vũng Tàu'}, 
  {code: 'XSST', name: 'Sóc Trăng'}, 
  {code: 'XSBTH', name: 'Bình Thuận'}, 
  {code: 'XSBD', name: 'Bình Dương'}, 
  {code: 'XSBP', name: 'Bình Phước'},
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
      valueDaiDuThuong: {},
      current: moment(),
      typeNumber: 2,
      typeBlock: '',
      nameTypeBlock: '',
      listBlock: listBlocks[2],
      number: '',
      isOpen: false,
      resultLottery: {},
      modalIsOpen: false,
      result: [],
   };
  this.handleChange = this.handleChange.bind(this);
  this.onChangeDate = this.onChangeDate.bind(this);
  this.toggleCalendar = this.toggleCalendar.bind(this);
  this.onClickCheckResult = this.onClickCheckResult.bind(this);
  this.onChangeNumber = this.onChangeNumber.bind(this);

  this.openModal = this.openModal.bind(this);
  this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.renderKQLoTo = this.renderKQLoTo.bind(this);
 }

  alertOptions = {
    offset: 14,
    position: 'top left',
    theme: 'light',
    time: 5000,
    transition: 'scale'
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
 
  showAlert = (msg) => {
    this.msg.show(msg, {
      time: 4000,
      type: 'success',
    })
  }

   showAlertFail = (msg) => {
    this.msg.show(msg, {
      time: 4000,
      type: 'error',
    })
  }

   showAlertInfo = (msg) => {
    this.msg.show(msg, {
      time: 4000,
      type: 'info',
    })
  }

  componentWillMount() {
    this.updateValueDaiDuThuong();
  }

  getNameOfAward(code) {
    if (code === 'giai8') return 'Giải 8'
    if (code === 'giai7') return 'Giải 7'
    if (code === 'giai6') return 'Giải 6'
    if (code === 'giai5') return 'Giải 5'
    if (code === 'giai4') return 'Giải 4'
    if (code === 'giai3') return 'Giải 3'
    if (code === 'giai2') return 'Giải 2'
    if (code === 'giai1') return 'Giải 1'
    if (code === 'giaidb') return 'Giải Đặc biệt'

  }

  checkTypeTwoNumber() {
    const { resultLottery, number, typeNumber, typeBlock  } = this.state;
    if (typeBlock === 'DAU') {
      if (resultLottery.giai8 === number) {
        let rs = { 
          code: 'giai8', 
          name: 'Giải 8', 
          data: [
            {
              number: resultLottery.giai8, 
              firstNumber: resultLottery.giai8.substr(0, resultLottery.giai8.length - typeNumber),
              lastNumber: resultLottery.giai8.substr(resultLottery.giai8.length - typeNumber),
            }
          ]
         
        }
        return [rs];
      }
      return [];
    } 
    if (typeBlock === 'CUOI') {
      if (resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber) === number) {
        let rs = { 
          code: 'giaidb', 
          name: 'Giải Đặc biệt', 
          data: [
            {
              number: resultLottery.giaidb, 
              firstNumber: resultLottery.giaidb.substr(0, resultLottery.giaidb.length - typeNumber),
              lastNumber: resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber),
            }
          ]
        }
        return [rs];
      }
      return [] ;
    }
    if (typeBlock === 'DAU/CUOI') {
      const award = [];
      if (resultLottery.giai8 === number) {
        let rs = { 
          code: 'giai8', 
          name: 'Giải 8', 
          data: [
            {
              number: resultLottery.giai8, 
              firstNumber: resultLottery.giai8.substr(0, resultLottery.giai8.length - typeNumber),
              lastNumber: resultLottery.giai8.substr(resultLottery.giai8.length - typeNumber),
            }
          ]
        }
        award.push(rs);
      } 
      if (resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber) === number) {
        let rs = { 
          code: 'giaidb', 
          name: 'Giải Đặc biệt', 
          data: [
            {
              number: resultLottery.giaidb, 
              firstNumber: resultLottery.giaidb.substr(0, resultLottery.giaidb.length - typeNumber),
              lastNumber: resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber),
            }
          ]
        }
        return [rs];
      } 
      return award;
    }
    if (typeBlock === '18LO') {
      const award = [];
      for (var i = 0; i < 9; i++) {
        let nameAward = i === 0 ? 'giaidb' : `giai${i}`
        let value = resultLottery[nameAward];
        if (nameAward === 'giai6' || nameAward === 'giai4' || nameAward === 'giai3') {
          const arr = value.split('-');
          let rs = { code: nameAward,  name: this.getNameOfAward(nameAward), data: [] };
          arr.forEach(item => {
            if (item.substr(item.length - typeNumber) === number) {
              let temp = { 
                number: item, 
                firstNumber: item.substr(0, item.length - typeNumber),
                lastNumber: item.substr(item.length - typeNumber),
              }
              rs.data.push(temp);
              award.push(rs);
            }
          });
        }else if (value.substr(value.length - typeNumber) === number) {
          let rs = { 
            code: nameAward,  
            name: this.getNameOfAward(nameAward), 
            data: [
              {
                number: value, 
                firstNumber: value.substr(0, value.length - typeNumber),
                lastNumber: value.substr(value.length - typeNumber),
              }
            ]
          }
          award.push(rs);
        }
      }
      return award;
    }
  }

  checkTypeThreeNumber() {
    const { resultLottery, number, typeNumber, typeBlock } = this.state;
    if (typeBlock === 'DAU') {
      if (resultLottery.giai7 === number) {
        let rs = { 
          code: 'giai7', 
          name: 'Giải 7', 
          data: [
            {
              number: resultLottery.giai7, 
              firstNumber: resultLottery.giai7.substr(0, resultLottery.giai7.length - typeNumber),
              lastNumber: resultLottery.giai7.substr(resultLottery.giai7.length - typeNumber),
            }
          ]
        }
        return [rs];
      }
      return [];
    } 
    if (typeBlock === 'CUOI') {
      if (resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber) === number) {
        let rs = { 
          code: 'giaidb', 
          name: 'Giải Đặc biệt', 
          data: [
            {
              number: resultLottery.giaidb, 
              firstNumber: resultLottery.giaidb.substr(0, resultLottery.giaidb.length - typeNumber),
              lastNumber: resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber),    
            }
          ]
        }
        return [rs];
      }
      return [] ;
    }
    if (typeBlock === 'DAU/CUOI') {
      const award = [];
      if (resultLottery.giai7 === number) {
        let rs = { 
          code: 'giai7', 
          name: 'Giải 7', 
          data: [
            {
              number: resultLottery.giai7, 
              firstNumber: resultLottery.giai7.substr(0, resultLottery.giai7.length - typeNumber),
              lastNumber: resultLottery.giai7.substr(resultLottery.giai7.length - typeNumber),
            }
          ]
        }
        award.push(rs);
      } 
      if (resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber) === number) {
        let rs = { 
          code: 'giaidb', 
          name: 'Giải Đặc biệt', 
          data: [
            {
              number: resultLottery.giaidb, 
              firstNumber: resultLottery.giaidb.substr(0, resultLottery.giaidb.length - typeNumber),
              lastNumber: resultLottery.giaidb.substr(resultLottery.giaidb.length - typeNumber),
            }
          ]
        }
        return [rs];
      } 
      return award;
    }
    if (typeBlock === '7LO') {
      let value = resultLottery['giai4'];
      const arr = value.split('-');
      let rs = { code: 'giai4',  name: 'Giải 4', data: [] };
      arr.forEach(item => {
        if (item.substr(item.length - typeNumber) === number) {
          let temp = { 
            number: item, 
            firstNumber: item.substr(0, item.length - typeNumber),
            lastNumber: item.substr(item.length - typeNumber),
          }
          rs.data.push(temp);
        }
      });
      if (rs.data.length > 0) return [rs];
      return [];
    }
    if (typeBlock === '17LO') {
      const award = [];
      for (var i = 0; i < 8; i++) {
        let nameAward = i === 0 ? 'giaidb' : `giai${i}`
        let value = resultLottery[nameAward];
        if (nameAward === 'giai6' || nameAward === 'giai4' || nameAward === 'giai3') {
          const arr = value.split('-');
          let rs = { code: nameAward,  name: this.getNameOfAward(nameAward), data: [] };
          arr.forEach(item => {
            if (item.substr(item.length - typeNumber) === number) {
              let temp = { 
                number: item, 
                firstNumber: item.substr(0, item.length - typeNumber),
                lastNumber: item.substr(item.length - typeNumber),
              }
              rs.data.push(temp);
              award.push(rs);
            }
          });
        }else if (value.substr(value.length - typeNumber) === number) {
          let rs = { 
            code: nameAward,  
            name: this.getNameOfAward(nameAward), 
            data: [
              {
                number: value, 
                firstNumber: value.substr(0, value.length - typeNumber),
                lastNumber: value.substr(value.length - typeNumber),
              }
            ]
          }
          award.push(rs);
        }
      }
      return award;
    }
  }
  
  checkTypeFourNumber() {
    const { resultLottery, number, typeNumber, typeBlock } = this.state;
    if (typeBlock === '4LO') {
      const award = [];
      let value = resultLottery['giai6'];
      const arr = value.split('-');
      let rs = { code: 'giai6',  name: 'Giải 6', data: [] };
      arr.forEach(item => {
        if (item.substr(item.length - typeNumber) === number) {
          let temp = { 
            number: item, 
            firstNumber: item.substr(0, item.length - typeNumber),
            lastNumber: item.substr(item.length - typeNumber),
          }
          rs.data.push(temp);
          award.push(rs);
        }
      });
      value = resultLottery['giai5'];
      if (value.substr(value.length - typeNumber) === number) {
        let rs = { 
          code: 'giai5', 
          name: 'Giải 5', 
          data: [
            {
              number: resultLottery.giai5, 
              firstNumber: resultLottery.giai5.substr(0, resultLottery.giai5.length - typeNumber),
              lastNumber: resultLottery.giai5.substr(resultLottery.giai5.length - typeNumber),
            }
          ]
        }
        return [rs];
      }
    return award;
    }
    if (typeBlock === '16LO') {
      const award = [];
      for (var i = 0; i < 7; i++) {
        let nameAward = i === 0 ? 'giaidb' : `giai${i}`
        let value = resultLottery[nameAward];
        if (nameAward === 'giai6' || nameAward === 'giai4' || nameAward === 'giai3') {
          const arr = value.split('-');
          let rs = { code: nameAward,  name: this.getNameOfAward(nameAward), data: [] };
          arr.forEach(item => {
            if (item.substr(item.length - typeNumber) === number) {
              let temp = { 
                number: item, 
                firstNumber: item.substr(0, item.length - typeNumber),
                lastNumber: item.substr(item.length - typeNumber),
              }
              rs.data.push(temp);
              award.push(rs);
            }
          });
        }else if (value.substr(value.length - typeNumber) === number) {
          let rs = { 
            code: nameAward,  
            name: this.getNameOfAward(nameAward), 
            data: [
              {
                number: value, 
                firstNumber: value.substr(0, value.length - typeNumber),
                lastNumber: value.substr(value.length - typeNumber),
              }
            ]
          }
          award.push(rs);
        }
      }
      return award;
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
      nameTypeBlock: val.label,
    });
  }

  onChangLoaiSo(val) {
    this.setState({
      typeNumber: val.value,
      typeBlock: '',
      nameTypeBlock: '',
      listBlock: listBlocks[val.value],
    });
  }

  onChangeNumber(e) {
    const { name, value } = e.target;
    if (name === 'number') {
      if (/[^\d]/.test(value)) {
        return 
      }
      if (value.length > 4) {
        return 
      }
      this.setState({ number: value });
    }
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }

  onValid() {
    const { typeBlock, number } = this.state;
    let isValid = true;
    if (typeBlock === '') {
      isValid = false;
      this.showAlertInfo(`Vui lòng chọn loại Lô!`);
    }
    if (number === '') {
      isValid = false;
      this.showAlertInfo(`Vui lòng Nhập số dự thưởng của bạn!`);
    }
    return isValid
  }

  onClickCheckResult() {
    const { current, valueDaiDuThuong, typeNumber } = this.state;
    const urlDate = current.format('DD-MM-YYYY');
    const dateDefault = current.format('DD/MM/YYYY');
    const codeProvince = valueDaiDuThuong.code;
    const params = `urlDate=${urlDate}&dateDefault=${dateDefault}&codeProvince=${codeProvince}`;
    if (!this.onValid()) return;
    superagent
    .get(`/apiClient/v1/crawler?${params}`)
    .end((err, res) => {
      if (res.body.success) {
        this.setState({
          resultLottery: res.body.result,
        }, () => {
          if (typeNumber === 2) {
             this.setState({ result:  this.checkTypeTwoNumber()}, () => {
                this.openModal();          
             });
          }
          if (typeNumber === 3) {
             this.setState({ result:  this.checkTypeThreeNumber()}, () => {
                this.openModal();          
             });
          }
          if (typeNumber === 4) {
             this.setState({ result:  this.checkTypeFourNumber()}, () => {
                this.openModal();          
             });
          }
        })
      }
      else {
        this.showAlertFail(`Chưa có KQXS cho ngày ${dateDefault}`);
      }
    })
  }


  renderKQLoTo() {
    const { resultLottery, current, result, valueNPH, valueDaiDuThuong, typeNumber, typeBlock, nameTypeBlock, number } = this.state;
    return (
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
          contentLabel="Example Modal"
        >
          <div style={{ width: 500 }}>
            <div className="panel-group panel-group-lg" id="accordion5">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion5">
                      Kết quả dò vé số {resultLottery.title} - Xổ số Miền Nam, ngày {current.format('DD/MM/YYYY')}
                    </a>
                  </h4>
                </div>
                <div id="collapse5One" className="accordion-body collapse in">
                  <div className="panel-body">
                    <div
                      style={{
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 16,
                        marginBottom: 10,
                      }}
                    >Thông tin vé Lô Tô <span style={{ color: 'red', fontWeight: 'bold' }}>({valueNPH === 'BT' ? 'Bình Thuận' : 'Đồng Nai'})</span> :</div>
                    <div
                    > 
                      <i>
                        <span> - Đài dự thưởng: </span>
                        <span
                         style={{ color: 'red', fontWeight: 'bold' }}
                        >{valueDaiDuThuong.name}</span>
                        , ngày <span
                          style={{ color: 'red', fontWeight: 'bold' }}
                        >{current.format('DD/MM/YYYY')}</span>
                      </i>
                    </div>
                      <i>
                        <span> - Loại: </span>
                        <span style={{ color: 'red', fontWeight: 'bold' }} >{typeNumber} số ({nameTypeBlock})</span></i><br />
                      <i>
                        <span> - Số dự thưởng của bạn: </span>
                        <span style={{ color: 'red', fontWeight: 'bold' }} >{number}</span>
                      </i>
                      <hr />
                     {
                        result.length === 0 ? 
                          <div>
                            <div 
                              style={{
                                color: 'red',
                                fontSize:  15,
                                fontWeight: 'bold'
                              }}
                            ><i>** Rất tiếc con số dự thưởng của bạn đã không trúng. Chúc bạn may mắn lần sau.</i></div>
                            <hr />
                          </div>
                        : 
                        <div>
                          <div>
                            <div 
                              style={{
                                color: 'red',
                                fontSize:  16,
                                fontWeight: 'bold',
                                marginBottom: 10,
                              }}
                            >Chúc mừng bạn đã trúng giải:</div>
                            {
                              result.map(item => {
                                return (
                                  <i>
                                    <div>
                                      <span style={{ color: 'black' }}>
                                        - Kết quả trúng ở hàng: {item.name}
                                      </span>
                                      {
                                        item.data.map(item => {
                                          return (
                                            <span> ({item.firstNumber}<span style={{ color: 'red', fontWeight: 'bold', fontSize: 15 }} >{item.lastNumber})</span></span>
                                          );
                                        })
                                      }
                                    </div>
                                  </i>
                                );
                              })
                            }
                            <hr />
                            <i style={{ fontSize: 12 }}>** Liên hệ đại lý gần nhất để nhận giải thưởng.</i>
                          </div>
                        </div>
                      }
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              style={{ position: 'relative', float: 'right', top: 5, width: 100 }}
              onClick={() => this.setState({ modalIsOpen: false })}>
              Huỷ
            </button>
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
                        style={{ fontSize: 12, color: 'red', fontWeight: 'bold' }}
                        className="btn btn-default btnAwardR">
                        {this.state.valueDaiDuThuong.name}
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
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
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
