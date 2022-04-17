import React, { Component, useState, useEffect} from 'react';
import { useNavigate } from "react-router";
import RequestPageItemsManifest from './RequestPageItemsManifest';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function RequestAShipment() {

  const [state, setState] = useState(
    {
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
      postcode : '',   
      manifestList:[]  // 这个为记录所需物品清单table

    }
  )
const navigate = useNavigate();

useEffect (()=>{ //用useEffect调用当前state 进行fetch给后端
  if (state.receiverName!==''){
  try {
     fetch(`${SERVER_URL}/shipmentRequest/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
     console.log("Fetch stated",state)
    navigate("/approveShipment");
  } catch(err){
    console.log(err)
  }}
})

async function updateState(event){
  event.preventDefault()//避免刷新页面不能删除
  try {
    await setState({ //必须await
      receiverName :  event.target.receiverName.value,
      phoneNumber :  event.target.phoneNumber.value,
      email :   event.target.email.value,
      subTeams :  event.target.subTeams.value,
      region :  event.target.region.value,
      expDeliverDate:  event.target.expDeliverDate.value,

      street :   event.target.street.value,
      address2 :   event.target.address2.value,
      province :   event.target.province.value,
      city :   event.target.city.value,
      postcode :   event.target.postcode.value,
      manifestList: []
    });
  } catch(err){
    console.log(err)
  }
}
    return (
      <>
        <h3>Start a new shipment request</h3>
        <div>
        <form onSubmit={(e)=> updateState(e)}>
        <div className="containter">
          {/* 第1行 */}
          <div class="row">
            <div class="col-sm">
              <label htmlFor="receiverName">receiverName:</label>
              <input type="text" className="form-control"id="receiverName"/>
            </div>
            <div class="col-sm">
              <label htmlFor="phoneNumber">phoneNumber:</label>
              <input type="text" className="form-control"id="phoneNumber"/>
            </div>
          </div>

          {/* 第2行 */}
          <div class="row">
            <div class="col-sm">
              <label htmlFor="email">email:</label>
              <input type="text" className="form-control"id="email" />
            </div>
            <div class="col-sm">
              <label htmlFor="subTeams">subTeams:</label>
              <input type="text" className="form-control"id="subTeams" />
            </div>
          </div>

          {/* 第3行 */}
          <div class="row">
            <div class="col-sm">
             <label htmlFor="region">region:</label>
             <select class="form-select" id="region" >
                <option selected>Select your region</option>
                <option value="west">West</option>
                <option value="middle">Middle</option>
                <option value="east">East</option>
              </select>
            </div>
            <div class="col-sm">
              <label htmlFor="expDeliverDate">Expected Deliver Date:</label>
              <input type="text" className="form-control" id="expDeliverDate" />
            </div>
          </div>
          <div class="row"><br></br></div>
          {/* Address */}
          <div class="row">
            <div class="col-sm">
              <label htmlFor="street">Street Address1:</label>
              <input className="form-control" id="street" type="text" placeholder="Street address" />
            </div>
            <div class="col-sm">
              <label htmlFor="address2">Address2(Room/APT/Suit):</label>
              <input className="form-control" id="address2" type="text" placeholder="Address2(Room/APT/Suit)"  />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <label htmlFor="province">Province:</label>
              <input className="form-control" id="province" type="text" placeholder="State/Province" />
            </div>
            <div class="col-sm">
              <label htmlFor="city">City:</label>
              <input className="form-control" id="city" type="text" placeholder="city" />
            </div>
            <div class="col-sm">
              <label htmlFor="postcode">Postcode:</label>
              <input className="form-control"  id="postcode" type="text" placeholder="Zip/Postcode" />
            </div>
          </div>
          
          <div class="row"><br></br></div>{/* Bank line */}
          <div class="row"><p><u>Items manifest:</u></p></div>
          {/* 第五行输入框 */}
          {RequestPageItemsManifest()}
        
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
