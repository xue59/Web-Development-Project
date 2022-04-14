import React, { useState } from 'react'
import { useNavigate } from "react-router";
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
    navigate("/");
  }


  return (
  <>
    <h3>Start a new shipment request</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">itemName:</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            value={form.itemName}
            onChange={(e) => updateForm({ itemName: e.target.value })}
          />
        </div>
      </form>

    
  </>
)}
