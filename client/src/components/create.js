import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
  item_name: "",
  preview_img: "",
  current_quantity: "",
  sub_team: "",
  region: "",
  warehouse_location: "",
  notes: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5001/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ item_name: "", preview_img: "", current_quantity: "", sub_team: "", region: "", warehouse_location: "", notes: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="item_name">item_name</label>
         <input
           type="text"
           className="form-control"
           id="item_name"
           value={form.item_name}
           onChange={(e) => updateForm({ item_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="preview_img">preview_img</label>
         <input
           type="text"
           className="form-control"
           id="preview_img"
           value={form.preview_img}
           onChange={(e) => updateForm({ preview_img: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="current_quantity">current_quantity</label>
         <input
           type="text"
           className="form-control"
           id="current_quantity"
           value={form.current_quantity}
           onChange={(e) => updateForm({ current_quantity: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="sub_team">sub_team</label>
         <input
           type="text"
           className="form-control"
           id="sub_team"
           value={form.sub_team}
           onChange={(e) => updateForm({ sub_team: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="region">region</label>
         <input
           type="text"
           className="form-control"
           id="region"
           value={form.region}
           onChange={(e) => updateForm({ region: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="warehouse_location">warehouse_location</label>
         <input
           type="text"
           className="form-control"
           id="warehouse_location"
           value={form.warehouse_location}
           onChange={(e) => updateForm({ warehouse_location: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="notes">notes</label>
         <input
           type="text"
           className="form-control"
           id="notes"
           value={form.notes}
           onChange={(e) => updateForm({ notes: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}