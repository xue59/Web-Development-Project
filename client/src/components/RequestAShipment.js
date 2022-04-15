import React, { useState } from 'react'
import { useNavigate } from "react-router";
import RequestPageItemsManifest from './RequestPageItemsManifest';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function RequestAShipment() {
  const [form, setForm] = useState({
    itemName: "",
    img: "",
    currentQuantity: 0,
    subTeams: "",
    region: "",
    warehouseLocation:"",
    notes: ""
   });
   const navigate = useNavigate();
  
   function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newItem = { ...form };
    await fetch(`${SERVER_URL}/shipmentRequest/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
    setForm({
     itemName: "",
     img: "",
     currentQuantity: 0,
     subTeams: "",
     region: "",
     warehouseLocation:"",
     notes: ""
    });
    //navigate("/");
  }


  return (
  <>
    <h3>Start a new shipment request</h3>
      <form onSubmit={onSubmit}>
        <div className="containter"> 
        {/* 第一行输入框 */}
          <div class="row">
            <div class="col-sm">
              <label htmlFor="receiverName">receiverName:</label>
              <input
                type="text"
                className="form-control"
                id="receiverName"
                value={form.receiverName}
                onChange={(e) => updateForm({ receiverName: e.target.value })}
              />
            </div>
            <div class="col-sm">
              <label htmlFor="phoneNumber">phoneNumber:</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={form.phoneNumber}
                onChange={(e) => updateForm({ phoneNumber: e.target.value })}
              />
            </div>
          </div>
        {/* 第二行输入框 */}
        <div class="row">
            <div class="col-sm">
              <label htmlFor="email">email:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </div>
            <div class="col-sm">
              <label htmlFor="subTeams">subTeams:</label>
              <input
                type="text"
                className="form-control"
                id="subTeams"
                value={form.subTeams}
                onChange={(e) => updateForm({ subTeams: e.target.value })}
              />
            </div>
          </div>
        {/* 第三行输入框 */}
        <div class="row">
            <div class="col-sm">
             <label htmlFor="region">region:</label>
             <select class="form-select" onChange={(e) => updateForm({ region: e.target.value })}>
                <option selected>Select your region</option>
                <option value="west">West</option>
                <option value="middle">Middle</option>
                <option value="east">East</option>
              </select>
            </div>
            <div class="col-sm">
              <label htmlFor="expDeliverDate">Expected Deliver Date:</label>
              <input
                type="text"
                className="form-control"
                id="expDeliverDate"
                value={form.expDeliverDate}
                onChange={(e) => updateForm({ expDeliverDate: e.target.value })}
              />
            </div>
          </div>
        <div class="row"><br></br></div>
        {/* 第四行输入框 */}
        <div class="row">
            <div class="col-sm">
              <label htmlFor="ststreetreet">Street Address:</label>
              <input
                type="text"
                className="form-control"
                id="street"
                value={form.street}
                onChange={(e) => updateForm({ street: e.target.value })}
              />
            </div>
            <div class="col-sm">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={form.city}
                onChange={(e) => updateForm({ city: e.target.value })}
              />
            </div>
          </div>
        {/* 第五行输入框 */}
        <div class="row">
            <div class="col-sm">
              <label htmlFor="province">Province:</label>
              <input
                type="text"
                className="form-control"
                id="province"
                value={form.province}
                onChange={(e) => updateForm({ province: e.target.value })}
              />
            </div>
            <div class="col-sm">
              <label htmlFor="country">Conutry: </label>
              <input
                type="text"
                className="form-control"
                id="country"
                value={form.country}
                onChange={(e) => updateForm({ stcountryate: e.target.value })}
              />
            </div>
            <div class="col-sm">
              <label htmlFor="postcode">Postcode: </label>
              <input
                type="text"
                className="form-control"
                id="postcode"
                value={form.postcode}
                onChange={(e) => updateForm({ postcode: e.target.value })}
              />
            </div>
          </div>
          <div class="row"><br></br></div>
          <div class="row"><p><u>Items manifest:</u></p></div>
        {/* 第五行输入框 */}
        <RequestPageItemsManifest />


        {/* 第六行Submit 按钮 */}
        <div class="row"><br></br></div>
        <div class="row"><br></br></div>
        </div> 
        <div className="form-group">
         <input
           type="submit"
           value="Submit shipment request"
           className="btn btn-primary"
         />
       </div>      
       </form>

    
  </>
)}
