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
              <label htmlFor="address1">Address 1:</label>
              <input
                type="text"
                className="form-control"
                id="address1"
                value={form.address1}
                onChange={(e) => updateForm({ address1: e.target.value })}
              />
            </div>
            <div class="col-sm">
              <label htmlFor="address2">Address 2: (Apt/Room/Suit No.)</label>
              <input
                type="text"
                className="form-control"
                id="address2"
                value={form.address2}
                onChange={(e) => updateForm({ address2: e.target.value })}
              />
            </div>
          </div>
        {/* 第五行输入框 */}
        <div class="row">
            <div class="col-sm">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={form.city}
                onChange={(e) => updateForm({ city: e.target.value })}
              />
            </div>
            <div class="col-sm">
              <label htmlFor="state">State/Province: </label>
              <input
                type="text"
                className="form-control"
                id="state"
                value={form.state}
                onChange={(e) => updateForm({ state: e.target.value })}
              />
            </div>
            <div class="col-sm">
              <label htmlFor="zip">Zip/Postal Code: </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                value={form.zip}
                onChange={(e) => updateForm({ zip: e.target.value })}
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
