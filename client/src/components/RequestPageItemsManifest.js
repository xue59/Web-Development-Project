import React from 'react'
import { useState } from "react";

export default function RequestPageItemsManifest() {
  const [newItemList,setNewItemList] = useState([
      {
      newitemName: "",
      currentQuantiry: 0,
      requestAmount: 0
      }
  ])
  const [displayForm, setDisplayForm] = useState(false);
  const [newItem, setNewItem] = useState({
    newitemName: "",
    currentQuantiry: 0,
    requestAmount: 0
  })

  const createRow = () => {
    setNewItemList([...newItemList, { newitemName: setNewItemList.length + 1, ...newItem }]);
    setNewItem({
        newitemName: "",
        currentQuantiry: 0,
        requestAmount: 0
    });
    setDisplayForm(false);
  };

  const handleOnChange = e => {
    setNewItem({
      ...newItem,
      [e.target.newitemName]: e.target.value
    });
  };

  function addARow(){
    //   console.log("add a row clicked!")
    setNewItemList([...newItemList, 
        {
            newitemName: "",
            currentQuantiry: 0,
            requestAmount: 0 
        }
      ])
      return 
  }

function removeLastRow(){
    // console.log("remove last roll clicked!")
    newItemList.pop()
    setNewItemList([...newItemList])
    return
}

function itemNameChanged(index){
    console.log(index,"input changed")
}

function lockManifest(){
    console.log("Lock Manifest")
}

  return (
    <>
     <table className="table table-striped" style={{ marginTop: 5, border: 1, width: "100%" }}>
        <thead>
            <tr>
                <th>Item Name:</th>
                <th>Quantity</th>
                <th>Request amount</th>
            </tr>
        </thead>
        <tbody>
            {newItemList.map((row,index) => (
            <tr>
              <td>
                  <input type="text" placeholder={row.newitemName}></input>
              </td>
              <td>{row.currentQuantiry}</td>
              <td>
                  <input type="text" placeholder="Enter amount you need" ></input>
              </td>
            </tr>
            ))}
        </tbody>
     </table>
    

     <div>
         <button onClick={addARow}>
             Add an item
        </button>
        <button onClick={removeLastRow}>
             Remove last item
        </button>
     </div>
        <br/>
        <button onClick={lockManifest}>
             Lockmanifest
        </button>
       
    </>
  )
}
