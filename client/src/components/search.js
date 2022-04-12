import React, { useState } from "react";
import { useNavigate } from "react-router";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Search() {
 const [form, setForm] = useState({
  itemName: "",
  // img: "",
  // currentQuantity: 0,
  // subTeams: "",
  // region: "",
  // warehouseLocation:"",
  // notes: ""
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

    // TODO: add search logic below

  // const params = useParams();

  // useEffect(() => {
  //   async function findInventory() {
  //     const data = await fetch(`${SERVER_URL}/search/${params.itemName}`);
  //     const jsonData = await data.json();
  //     console.log(jsonData);
  //     setInventory(jsonData);
  //     console.log(inventory);
  //   }
  //   findInventory();
  // }, [params.id]);
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Search Record</h3>
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
{/* 
       <div className="form-group">
         <label htmlFor="subTeams">subTeams:</label>
         <input
           type="text"
           className="form-control"
           id="subTeams"
           value={form.subTeams}
           onChange={(e) => updateForm({ subTeams: e.target.value })}
         />
       </div> */}
      
       {/* <div className="form-group">
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
        </div> */}
       {/* </div> */}

       <div className="form-group">
         <input
           type="submit"
           value="Search item"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}