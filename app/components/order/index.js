import React, { Component } from 'react';
import superagent from 'superagent';
import Header from '../Header'
import Footer from '../Footer'
import './styles.css';
import NumericInput from 'react-numeric-input';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import AlertContainer from 'react-alert'


const numeral = require('numeral');


const ListDaiDongNai = [
  'Tiền Giang', 'TP Hồ Chí Minh', 'Vũng Tàu', 'Đồng Nai', 'Tây Ninh', 'Bình Dương', 'TP Hồ Chí Minh'
];

const ListDaiBinhThuan = [
  'Lâm Đồng', 'Đồng Tháp', 'Vũng Tàu', 'Sóc Trăng', 'Bình Thuận', 'Bình Dương', 'Bình Phước'
];

const listSeedCode = [
  { code: 'TG', name: 'Tiền Giang' },
  { code: 'HCM', name: 'TP Hồ Chí Minh' },
  { code: 'VT', name: 'Vũng Tàu' },
  { code: 'DN', name: 'Đồng Nai' },
  { code: 'TN', name: 'Tây Ninh' },
  { code: 'BD', name: 'Bình Dương' },
  { code: 'DT', name: 'Đồng Tháp' },
  { code: 'LD', name: 'Lâm Đồng' },
  { code: 'ST', name: 'Sóc Trăng' },
  { code: 'BT', name: 'Bình Thuận' },
  { code: 'BP', name: 'Bình Phước' },
];


const listNhaPhatHanh = [
  { value: 'BT', label: 'Bình Thuận' },
  { value: 'DN', label: 'Đồng Nai' },
];

const listLoaiSo = [
  { value: 2, label: '2 Số' },
  { value: 3, label: '3 Số' },
  { value: 4, label: '4 Số' },
];

const lo2So = [
  { value: '', label: 'Chọn Lô' },
  { value: 'DAU', label: 'Đầu' },
  { value: 'CUOI', label: 'Cuối' },
  { value: 'DAU/CUOI', label: 'Đầu/Cuối' },
  { value: '18LO', label: '18 Lô' },
];

const lo3So = [
  { value: '', label: 'Chọn Lô' },
  { value: 'DAU', label: 'Đầu' },
  { value: 'CUOI', label: 'Cuối' },
  { value: 'DAU/CUOI', label: 'Đầu/Cuối' },
  { value: '7LO', label: '7 Lô' },
  { value: '17LO', label: '17 Lô' },
];

const lo4So = [
  { value: '', label: 'Chọn Lô' },
  { value: '4LO', label: '4 Lô' },
  { value: '16LO', label: '16 Lô' },
];

const prices = [
  { value: 10, label: '10.000' },
  { value: 20, label: '20.000' },
  { value: 50, label: '50.000' },
]


export default class OrderUser extends Component {

  constructor (props) {
   super(props)
   this.state = {
      current: moment(),
      valueNPH: 'BT',
      valueLoaiSo: 2,
      is2So: true,
      is3So: false,
      is4So: false,
      listOrderSo: [
        {
          merchant: 'BT',
          numbers: {
            type: 2,
            number1: 0,
            number2: 0,
            number3: 0,
            number4: 0,
          },
          date: moment(),
          typeBlock: '',
          seedAward: ' ----- ',
          total: 0,
          price: 10,
          amoutBuyPrice: 1,
        },
      ],
      cusName: '',
      cusAddress: '',
      cusPhone: '',
   };
   this.onChangeNPH = this.onChangeNPH.bind(this);
   this.onChangeSo = this.onChangeSo.bind(this);
   this.onChangeDate = this.onChangeDate.bind(this);
   this.onChange = this.onChange.bind(this);
   this.onSave = this.onSave.bind(this);
  }

  resetAllField() {
    const { cusName, cusAddress, cusPhone, listOrderSo } = this.state;
    const arr = [
        {
          merchant: 'BT',
          numbers: {
            type: 2,
            number1: 0,
            number2: 0,
            number3: 0,
            number4: 0,
          },
          date: moment(),
          typeBlock: '',
          seedAward: ' ----- ',
          total: 0,
          price: 10,
          amoutBuyPrice: 1,
        },
    ];
    this.setState({
      cusName: '',
      cusAddress: '',
      cusPhone: '',
      listOrderSo: arr,
    })
  }

  alertOptions = {
    offset: 14,
    position: 'top left',
    theme: 'light',
    time: 5000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Đặt số thành công', {
      time: 4000,
      type: 'success',
    })
  }

   showAlertFail = () => {
    this.msg.show('Đặt số thất bại', {
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

  onSave() {
    const { current, cusName, cusAddress, cusPhone, listOrderSo } = this.state;
    const arr = listOrderSo.map(item => {
      let number =  0; 
      if (item.type === 2) {
        number = Number.parseInt(`${item.number1}${item.number2}`);
      }
      if (item.type === 3) {
        number = Number.parseInt(`${item.number1}${item.number2}${item.number3}`);
      }
      if (item.type === 4) {
        number = Number.parseInt(`${item.number1}${item.number2}${item.number3}${item.number4}`);
      }
      let provinceCode = '';
      listSeedCode.forEach(v => {
        if (v.name === item.seedAward) {
          provinceCode = v.code;
        }
      })
      return { number, quanlity: item.amoutBuyPrice, price: item.price, type: item.typeBlock, provinceCode, releaseBy: item.merchant }
    })

     let strValid  = '';
      if (cusName === '') {
        strValid = strValid + 'Vui lòng điền tên khách hàng\n';
      } 
      if (cusPhone === '') {
        strValid = strValid + 'Vui lòng điền số điện thoại khách hàng\n';
      } 
      if (cusAddress === '') {
        strValid = strValid + 'Vui lòng điền địa chỉ khách hàng\n';
      } 
      if (strValid === '') 
      {
        const order = {
          date: moment(current.format('DD/MM/YYYY'), 'DD/MM/YYYY').toISOString(),
          cusName,
          cusAddress,
          cusPhone,
          details: arr,
        };
        superagent
        .post('/api/v1/order')
        .send({ order })
        .end((err, res) => {
          if (!err) {
            this.showAlert();
            this.resetAllField();
          }else {
            this.showAlertFail();
          }
        })
      }else {
        this.showAlertInfo(strValid);
      }
  }

  componentWillMount() {
    const { listOrderSo } = this.state;
    let n = listOrderSo[0].date.day();
    if (listOrderSo[0].merchant === 'BT') {
      listOrderSo[0].seedAward = ListDaiBinhThuan[n];
    }else {
      listOrderSo[0].seedAward = ListDaiDongNai[n];
    }
    this.setState({ listOrderSo })
  }

  initNewOne() {
    const temp = {
      merchant: 'BT',
      numbers: {
        type: 2,
        number1: 0,
        number2: 0,
        number3: 0,
        number4: 0,
      },
      date: moment(),
      typeBlock: '',
      seedAward: ' ----- ',
      total: 0,
      price: 10,
      amoutBuyPrice: 0,
    }
      const { listOrderSo } = this.state;
      listOrderSo.push(temp);
      this.setState({ listOrderSo });
  }

  onChange(e) {
    const { name, value } = e.target;

    if (name === 'cusName') {
      this.setState({ cusName: value });
    }
    if (name === 'cusAddress') {
      this.setState({ cusAddress: value });
    }
    if (name === 'cusPhone') {
      this.setState({ cusPhone: value });
    }
  }

  onRemove(index) {
    const { listOrderSo } = this.state;
    listOrderSo.splice(index, 1);
    this.setState({ listOrderSo });
  }

  onChangeNPH(val, index) {
    const { listOrderSo } = this.state;
    listOrderSo[index].merchant = val.value;
    let n = listOrderSo[index].date.day();
    if (val.value === 'BT') {
      listOrderSo[index].seedAward = ListDaiBinhThuan[n];
    }else {
      listOrderSo[index].seedAward = ListDaiDongNai[n];
    }
    this.setState({ listOrderSo })
  }

  onChangeSo(val, index) {
    const { listOrderSo } = this.state;
    listOrderSo[index].numbers.type = val.value;
    this.setState({ listOrderSo })
  }

  onChangeDate(current, index) {
    const { listOrderSo } = this.state;
    listOrderSo[index].date = current;
    let n = current.day();
    if (listOrderSo[index].merchant === 'BT') {
      listOrderSo[index].seedAward = ListDaiBinhThuan[n];
    }else {
      listOrderSo[index].seedAward = ListDaiDongNai[n];
    }
    this.setState({ listOrderSo });
  }

  onChangeNumber(e, index, key) {
    const valueName = 'number' + key;
    const { listOrderSo } = this.state;
    listOrderSo[index].numbers[valueName] = e;
    this.setState({ listOrderSo });
  }

  onChangeBlock(val, index) {
    const { listOrderSo } = this.state;
    listOrderSo[index].typeBlock = val.value;
    this.setState({ listOrderSo });
  }

  onChangePrice(val, index) {
    const { listOrderSo } = this.state;
    listOrderSo[index].price = val.value;
    this.setState({ listOrderSo });
  }

  onChangeAmountPrice(val, index) {
    const { listOrderSo } = this.state;
    listOrderSo[index].amoutBuyPrice = val;
    this.setState({ listOrderSo });
  }

  renderBlock(type, index, value) {
    if (type === 2) {
      return (
       <Select style={{ width: 100, fontSize: 12 }} value={this.state.listOrderSo[index].typeBlock} clearable={false} options={lo2So} onChange={(val) => this.onChangeBlock(val, index)} />
      );
    }
    if (type === 3) {
      return (
       <Select style={{ width: 100, fontSize: 12 }} value={this.state.listOrderSo[index].typeBlock} clearable={false} options={lo3So} onChange={(val) => this.onChangeBlock(val, index)} />
      );
    }
    if (type === 4) {
      return (
       <Select style={{ width: 100, fontSize: 12 }} value={this.state.listOrderSo[index].typeBlock} clearable={false} options={lo4So} onChange={(val) => this.onChangeBlock(val, index)} />
      );
    }
  }

  renderNumber(amount, index) {
    const { listOrderSo } = this.state;
    if (amount  === 2) {
      return (
        <div className="divNumberic">
         <NumericInput
            style={{
              wrap: {
                width: 60,
                marginRight: 5,
              },
              input: {
                backgroundColor: 'white',
                color: 'red',
              },
            }}
          onChange={(x) => this.onChangeNumber(x, index, '1')}
          readOnly min={0} max={9} value={listOrderSo[index].numbers.number1} className="form-control"/>
          <NumericInput
            style={{
              wrap: {
                width: 60,
                marginRight: 5,
              },
              input: {
                backgroundColor: 'white',
                color: 'red',
              },
            }}
          onChange={(x) => this.onChangeNumber(x, index, '2')}
          readOnly min={0} max={9} value={listOrderSo[index].numbers.number2} className="form-control"/>
        </div>
      );
    }
    if (amount  === 3) {
      return (
        <div className="divNumberic">
         <NumericInput
            style={{
              wrap: {
                width: 60,
                marginRight: 5,
              },
              input: {
                backgroundColor: 'white',
                color: 'red',
              },
            }}
          onChange={(x) => this.onChangeNumber(x, index, '1')}
          readOnly min={0} max={9} value={listOrderSo[index].numbers.number1} className="form-control"/>
         <NumericInput
            style={{
              wrap: {
                width: 60,
                marginRight: 5,
              },
              input: {
                backgroundColor: 'white',
                color: 'red',
              },
            }}
          onChange={(x) => this.onChangeNumber(x, index, '2')}
          readOnly min={0} max={9} value={listOrderSo[index].numbers.number2} className="form-control"/>
           <NumericInput
            style={{
              wrap: {
                width: 60,
                marginRight: 5,
              },
              input: {
                backgroundColor: 'white',
                color: 'red',
              },
            }}
          onChange={(x) => this.onChangeNumber(x, index, '3')}
          readOnly min={0} max={9} value={listOrderSo[index].numbers.number3} className="form-control"/>
        </div>
      );
    }
    if (amount  === 4) {
      return (
        <div className="divNumberic">
         <NumericInput
            style={{
              wrap: {
                width: 60,
                marginRight: 5,
              },
              input: {
                backgroundColor: 'white',
                color: 'red',
              },
            }}
          onChange={(x) => this.onChangeNumber(x, index, '1')}
          readOnly min={0} max={9} value={listOrderSo[index].numbers.number1} className="form-control"/>
         <NumericInput
            style={{
              wrap: {
                width: 60,
                marginRight: 5,
              },
              input: {
                backgroundColor: 'white',
                color: 'red',
              },
            }}
          onChange={(x) => this.onChangeNumber(x, index, '2')}
          readOnly min={0} max={9} value={listOrderSo[index].numbers.number2} className="form-control"/>
           <NumericInput
            style={{
              wrap: {
                width: 60,
                marginRight: 5,
              },
              input: {
                backgroundColor: 'white',
                color: 'red',
              },
            }}
          onChange={(x) => this.onChangeNumber(x, index, '3')}
          readOnly min={0} max={9} value={listOrderSo[index].numbers.number3} className="form-control"/>
          <NumericInput
            style={{
              wrap: {
                width: 60,
                marginRight: 5,
              },
              input: {
                backgroundColor: 'white',
                color: 'red',
              },
            }}
          onChange={(x) => this.onChangeNumber(x, index, '4')}
          readOnly min={0} max={9} value={listOrderSo[index].numbers.number4} className="form-control"/>
        </div>
      );
    }
  }

  renderPrices(index) {
    return (
      <Select style={{ width: 100, fontSize: 12 }} value={this.state.listOrderSo[index].price} clearable={false} options={prices} onChange={(val) => this.onChangePrice(val, index)} />
    );
  }

  renderBoxInfo() {
    const { cusName, cusPhone, cusAddress } = this.state;
    return (
      <div className="col-sm-6">
        <div className="featured-box featured-box-primary align-left mt-xlg">
          <div className="box-content">
            <h4 className="heading-primary text-uppercase mb-md">Nhập Thông tin Khách hàng</h4>
            <form action="/" id="frmCalculateShipping" method="post">
              <div className="row">
                <div className="form-group">
                  <div className="col-md-6">
                    <label>Tên Khách hàng</label>
                    <input type="text" name='cusName' value={cusName} onChange={this.onChange}  placeholder='tên khách hàng' className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label>Điện thoại</label>
                    <input type="text" name='cusPhone' value={cusPhone} onChange={this.onChange} placeholder='số diện thoại' className="form-control" />
                  </div>
                </div>
              </div>
               <div className="row">
                <div className="form-group">
                  <div className="col-md-12">
                    <label>Địa chỉ</label>
                    <input type="text" name='cusAddress' value={cusAddress} onChange={this.onChange} placeholder='địa chỉ' className="form-control" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  renderBoxTotal() {
    const { listOrderSo } = this.state;
    let total = 0;
    listOrderSo.forEach(item => {
      total = total + ((item.price * item.amoutBuyPrice) * 1000);
    });
    return (
      <div className="col-sm-6">
        <div className="featured-box featured-box-primary align-left mt-xlg">
          <div className="box-content">
            <h4 className="heading-primary text-uppercase mb-md">Tổng tiền thanh toán </h4>
            <div className='row'>
                <div className="col-md-12">
                    <label>Tổng tiền:</label>
                    <br />
                    <label style={{ fontSize: 30, color: '#0088cc' }}>{`${numeral(total.toString()).format('0,0')}`} &#x20AB;</label>
                    <br />
                    <hr />
                    <div className='listButton'>
                      <button type="button" style={{ marginRight: 10, width: 100 }} onClick={this.onSave}  className="btn btn-primary ">Đặt số</button>
                      <button type="button" style={{ marginRight: 10, width: 100 }} className="btn btn-secondary ">Huỷ</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderBoxInput() {
    return (
      <div className="featured-boxes">
        <div className="row">
        {this.renderBoxInfo()}
        {this.renderBoxTotal()}
        </div>

      </div>
    );
  }

 renderContent() {
  const { listOrderSo } = this.state;
  return (
      <div className="col-md-12">
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      {this.renderBoxInput()}
      <div className="featured-box featured-box-primary align-left mt-sm">
        <div className="box-content">
          <form method="post" action="">
            <button type="button" onClick={() => this.initNewOne()} className="btn btn-default butnAddNew">Thêm số mới</button>
            <table className="shop_table  fullWidthTable">
              <thead>
                <tr>
                  <th className="product-remove customSizeHeader"> Đài phát hành </th>
                  <th className="product-thumbnail customSizeHeader"> Ngày dự thưởng </th>
                  <th className="product-name customSizeHeader"> Đài dự thưởng </th>
                  <th className="product-price customSizeHeader"> Loại Số </th>
                  <th className="product-quantity customSizeHeader"> Chọn Số </th>
                  <th className="product-subtotal customSizeHeader"> Chọn Lô</th>
                  <th className="product-subtotal customSizeHeader"> Mệnh giá</th>
                  <th className="product-subtotal customSizeHeader">Số Lượng</th>
                  <th className="product-subtotal customSizeHeader"></th>
                </tr>
              </thead>
              <tbody>
              {
                listOrderSo.map((item, index) => {
                  return (
                    <tr className="cart_table_item">
                      <td className="product-remove">
                        <Select style={{ width: 150, fontSize: 12 }} value={item.merchant} clearable={false} options={listNhaPhatHanh} onChange={(val) => this.onChangeNPH(val, index)} />
                      </td>
                      <td className="product-thumbnail">
                        <div style={{ width: 120 }}>
                          <DatePicker dateFormat="DD/MM/YYYY" selected={item.date} className="form-control width-Date" withPortal onChange={(current) => this.onChangeDate(current, index)} />
                        </div>
                      </td>
                      <td className="product-name">
                        <a href="#">{item.seedAward}</a>
                      </td>
                      <td className="product-price">
                         <Select style={{ width: 80, fontSize: 12 }} value={item.numbers.type} clearable={false} options={listLoaiSo} onChange={(val) => this.onChangeSo(val, index)} />
                      </td>
                      <td className="product-quantity">
                        {
                          this.renderNumber(item.numbers.type, index)
                        }
                      </td>
                      <td className="product-subtotal">
                        {
                          this.renderBlock(item.numbers.type, index)
                        }
                      </td>
                      <td className="product-subtotal">
                        {
                          this.renderPrices(index)
                        }
                      </td>
                      <td className="product-subtotal">
                        <NumericInput
                           style={{
                              wrap: {
                                width: 80,
                              },
                              input: {
                                backgroundColor: 'white',
                                color: 'red',
                              },
                            }}
                          min={0}
                          max={100}
                          className="form-control"
                          onChange={(val) => this.onChangeAmountPrice(val, index)}
                          value={item.amoutBuyPrice}/>
                      </td>
                       <td className="product-subtotal" style={{ width: 50 }}>
                        <a onClick={() => this.onRemove(index)} ><i className="fa fa-times" aria-hidden="true" style={{ color: 'red' }}></i></a>
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
        </form></div>
      </div>
    </div>
  );
 }

  render() {
    return (
      <div className="body">
      <Header />
        <div className="container">
          <h3 style={{ marginLeft: 50 ,marginTop: 20, marginBottom: 0, color: '#0088cc' }}><b>MUA SỐ ONLINE</b></h3>
          <div className="row">
            {
              this.renderContent()
            }
          </div>
        </div>
      <Footer />
    </div>
    );
  }
}
