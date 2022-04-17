import React, { Component } from 'react';
import { useNavigate } from "react-router";
import RequestPageItemsManifest from './RequestPageItemsManifest';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class RequestAShipment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      receiverName:'',
      phoneNumber : '',
      email: '',
      subTeams :'',
      region :'',
      expDeliverDate :'',

      street : '',
      address2 : '',
      province : '',
      city : '',
      postcode : ''
    }
  }

async updateState(event){
  event.preventDefault();
  try {
    await this.setState({
      receiverName :this.refs.receiverName.value,
      phoneNumber :this.refs.phoneNumber.value,
      email : this.refs.email.value,
      subTeams :this.refs.subTeams.value,
      region :this.refs.region.value,
      expDeliverDate:this.refs.expDeliverDate.value,

      street : this.refs.street.value,
      address2 : this.refs.address2.value,
      province : this.refs.province.value,
      city : this.refs.city.value,
      postcode : this.refs.postcode.value
    });
    // 需要修改 fetch URL 给后端传参数
    await fetch(`${SERVER_URL}/shipmentRequest/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
    //navigate("/");
    this.props.useNavigate("/approveShipment");
  } catch(err){
    console.log(err)
  }
}

  // componentDidUpdate() {
  //   if(this.state.street !== '') {
  //     this.refs.Modal.show();
  //   }
  // }


  render() {
    return (
      <>
        <h3>Start a new shipment request</h3>
        <div>
        <form onSubmit={(e) => this.updateState(e)}>
        <div className="containter">
          {/* 第1行 */}
          <div class="row">
            <div class="col-sm">
              <label htmlFor="receiverName">receiverName:</label>
              <input type="text" className="form-control"id="receiverName" ref="receiverName"/>
            </div>
            <div class="col-sm">
              <label htmlFor="phoneNumber">phoneNumber:</label>
              <input type="text" className="form-control"id="phoneNumber" ref="phoneNumber"/>
            </div>
          </div>

          {/* 第2行 */}
          <div class="row">
            <div class="col-sm">
              <label htmlFor="email">email:</label>
              <input type="text" className="form-control"id="email" ref="email"/>
            </div>
            <div class="col-sm">
              <label htmlFor="subTeams">subTeams:</label>
              <input type="text" className="form-control"id="subTeams" ref="subTeams"/>
            </div>
          </div>

          {/* 第3行 */}
          <div class="row">
            <div class="col-sm">
             <label htmlFor="region">region:</label>
             <select class="form-select" id="region" ref="region">
                <option selected>Select your region</option>
                <option value="west">West</option>
                <option value="middle">Middle</option>
                <option value="east">East</option>
              </select>
            </div>
            <div class="col-sm">
              <label htmlFor="expDeliverDate">Expected Deliver Date:</label>
              <input type="text" className="form-control" id="expDeliverDate" ref="expDeliverDate"/>
            </div>
          </div>
          <div class="row"><br></br></div>
          {/* Address */}
          <div class="row">
            <div class="col-sm">
              <label htmlFor="street">Street Address1:</label>
              <input className="form-control" id="street" type="text" placeholder="Street address" ref="street" />
            </div>
            <div class="col-sm">
              <label htmlFor="address2">Address2(Room/APT/Suit):</label>
              <input className="form-control" id="address2" type="text" placeholder="Address2(Room/APT/Suit)"  ref="address2" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <label htmlFor="province">Province:</label>
              <input className="form-control" id="province" type="text" placeholder="State/Province" ref="province" />
            </div>
            <div class="col-sm">
              <label htmlFor="city">City:</label>
              <input className="form-control" id="city" type="text" placeholder="city" ref="city" />
            </div>
            <div class="col-sm">
              <label htmlFor="postcode">Postcode:</label>
              <input className="form-control"  id="postcode" type="text" placeholder="Zip/Postcode" ref="postcode" />
            </div>
          </div>
          
          <div class="row"><br></br></div>{/* Bank line */}
          <div class="row"><p><u>Items manifest:</u></p></div>
          {/* 第五行输入框 */}
          <RequestPageItemsManifest />
        
        </div> {/* Container End */} 

        {/* Submit 按钮 */}
        <div class="row"><br></br></div>
        <div class="row"><br></br></div>
        <input className="btn btn-primary" type='submit' value='Submit shipment request' />
      </form>
      </div>
      </>

    );
  }
}

export default RequestAShipment;