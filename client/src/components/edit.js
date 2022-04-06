import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
 
export default function Edit() {
 const [form, setForm] = useState({
   itemName: "",
   img: "",
   currentQuantity: 0,
   subTeams: "",
   region: "",
   warehouseLocation:"",
   notes: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`${SERVER_URL}/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
    itemName: form.itemName,
    img: form.img,
    currentQuantity: form.currentQuantity,
    subTeams: form.subTeams,
    region: form.region,
    warehouseLocation: form.warehouseLocation,
    notes: form.notes,
   };
 
   // This will send a post request to update the data in the database.
   const data = await fetch(`${SERVER_URL}/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
   console.log(data);
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <div>
  <h3>Update Record</h3>
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
    <div className="form-group">
      <label htmlFor="img">imgs:</label>
      <input
        type="text"
        className="form-control"
        id="img"
        value={form.img}
        onChange={(e) => updateForm({ img: e.target.value })}
      />
    </div>

    <div className="form-group">
      <label htmlFor="currentQuantity">currentQuantity:</label>
      <input
        type="number"
        className="form-control"
        id="currentQuantity"
        value={form.currentQuantity}
        onChange={(e) => updateForm({ currentQuantity: e.target.value })}
      />
    </div>

    <div className="form-group">
      <label htmlFor="subTeams">subTeams:</label>
      <input
        type="text"
        className="form-control"
        id="subTeams"
        value={form.subTeams}
        onChange={(e) => updateForm({ subTeams: e.target.value })}
      />
    </div>
   
    <div className="form-group">
      <p>Region: </p>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="regionEast"
          id="region-East"
          value="East"
          checked={form.region === "East"}
          onChange={(e) => updateForm({ region: e.target.value })}
        />
        <label htmlFor="regionEast" className="form-check-label">East</label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="regionMiddle"
          id="region-Middle"
          value="Middle"
          checked={form.region === "Middle"}
          onChange={(e) => updateForm({ region: e.target.value })}
        />
        <label htmlFor="regionMiddle" className="form-check-label">Middle</label>
      </div>

      <div className="form-check form-check-inline"> 
        <input
          className="form-check-input"
          type="radio"
          name="regionWest"
          id="region-West"
          value="West"
          checked={form.region === "West"}
          onChange={(e) => updateForm({ region: e.target.value })}
        />
        <label htmlFor="regionWest" className="form-check-label">West</label>
      </div>

      <div className="form-group">
      <label htmlFor="warehouseLocation">warehouseLocation: </label>
      <input
        type="text"
        className="form-control"
        id="warehouseLocation"
        value={form.warehouseLocation}
        onChange={(e) => updateForm({ warehouseLocation: e.target.value })}
      />
     </div>

     <div className="form-group">
      <label htmlFor="notes">notes:</label>
      <input
        type="text"
        className="form-control"
        id="notes"
        value={form.notes}
        onChange={(e) => updateForm({ notes: e.target.value })}
      />
     </div>
    </div>
    
    <div className="form-group">
      <input
        type="submit"
        value="Update Record"
        className="btn btn-primary"
      />
    </div>
  </form>
</div>
 );
}