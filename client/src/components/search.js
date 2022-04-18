import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router";
import Select from 'react-select';
import getInventory from './getInventory'

async function SelectionObecjct(){
  let returnList = []
  const inputObject = (await getInventory())[0]
  for(let key in inputObject ){
    returnList.push({ label: inputObject[key], value: inputObject[key] })
  }
  return(returnList)
}

export default function Search() {
 const [form, setForm] = useState({
  itemName: "",
 });

 const [selectionRange, setRange] = useState([])

 useEffect( ()=>{
   async function fetchData(setRange){
       setRange(await  SelectionObecjct())
   }
   fetchData(setRange);
 },[form])

 const navigate = useNavigate();
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 // This function will handle the submission.
 function onSubmit(e) {
  e.preventDefault()
  navigate(`/search/${form.itemName}`)

 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Search Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="itemName">itemName:</label>
          <Select
            options={selectionRange}
            className="form-control"
            id="itemName"
            onChange={opt => {updateForm({ itemName: opt.value })}}/>
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