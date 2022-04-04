import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   item_name: "",
   preview_img: "",
   current_quantity: "",
   sub_team: "",
   region: "",
   warehouse_location: "",
   notes: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5001/record/${params.id.toString()}`);
 
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
    item_name: form.item_name,
    preview_img: form.preview_img,
    current_quantity: form.current_quantity,
    sub_team: form.sub_team,
    region: form.region,
    warehouse_location: form.warehouse_location,
    notes: form.notes,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5001/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="item_name">item_name: </label>
         <input
           type="text"
           className="form-control"
           id="item_name"
           value={form.item_name}
           onChange={(e) => updateForm({ item_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="preview_img">preview_img: </label>
         <input
           type="text"
           className="form-control"
           id="preview_img"
           value={form.preview_img}
           onChange={(e) => updateForm({ preview_img: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="current_quantity">current_quantity: </label>
         <input
           type="text"
           className="form-control"
           id="current_quantity"
           value={form.current_quantity}
           onChange={(e) => updateForm({ current_quantity: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="sub_team">sub_team: </label>
         <input
           type="text"
           className="form-control"
           id="sub_team"
           value={form.sub_team}
           onChange={(e) => updateForm({ sub_team: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="region">region: </label>
         <input
           type="text"
           className="form-control"
           id="region"
           value={form.region}
           onChange={(e) => updateForm({ region: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="warehouse_location">warehouse_location: </label>
         <input
           type="text"
           className="form-control"
           id="warehouse_location"
           value={form.warehouse_location}
           onChange={(e) => updateForm({ warehouse_location: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="notes">notes: </label>
         <input
           type="text"
           className="form-control"
           id="notes"
           value={form.notes}
           onChange={(e) => updateForm({ notes: e.target.value })}
         />
       </div>
       <br />
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