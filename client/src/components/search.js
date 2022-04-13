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
  navigate(`/search/${form.itemName}`)
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
  // }, [params.itemName]);
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